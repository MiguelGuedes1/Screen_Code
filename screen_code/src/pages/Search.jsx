import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH_TESTE
const apiKey = import.meta.env.VITE_API_KEY

//css
import "./CssParaPaginas.css"



function Search() {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchWithQueryURL)




    }, [query])






    return (
        <div className="container">

            <video className="backgroundVideo" autoPlay loop muted>
                <source src="/src/Assets/videofundo.mp4" type="video/mp4" />

            </video>

            <div className="title">
                <span>       {`while(alive) { eat() code() sleep() code () }`}</span>
            </div>

            <div className="movies-container">
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Search;