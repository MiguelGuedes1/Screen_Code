import { useState, useEffect } from "react"
import MovieCard from "../Components/MovieCard"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { FaDesktop } from 'react-icons/fa';



// css
import "./CssParaPaginas.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY



const BestMovies = () => {


    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")

    }




    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)
    }, [])



    return (
        <div className="container">
            <video className="backgroundVideo" autoPlay loop muted>
                <source src="videofundo.mp4" type="video/mp4" />

            </video>

            <form className="formulariopesquisa" onSubmit={handleSubmit}>
                <input type="text" placeholder="Another movie/genre" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit"> <BiSearchAlt2 /> </button>
            </form>



            <div className="movies-container">
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default BestMovies

