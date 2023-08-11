import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import About from './pages/About.jsx'
import BestMovies from './pages/bestMovies.jsx'

// css

import "./index.css"





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                    <Route path='/About' element={<About />} ></Route>
                    <Route path='/BestMovies' element={<BestMovies />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,

)
