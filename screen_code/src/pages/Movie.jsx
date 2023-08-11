import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import MovieCard from "../Components/MovieCard"

//css
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    const formatcurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])



    return (
        <div className="movie-page">

            <video className="backgroundVideo" autoPlay loop muted>
                <source src="videofundo.mp4" type="video/mp4" />

            </video>

            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />

                    <div className="info1">
                        <h3>
                            Budget
                        </h3>
                        <p>{formatcurrency(movie.budget)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            Revenue generated
                        </h3>
                        <p>{formatcurrency(movie.revenue)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            Movie duration
                        </h3>
                        <p>{movie.runtime} min.</p>
                    </div>

                    <div className="info">
                        <h3>
                            Movie description
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
};

export default Movie;