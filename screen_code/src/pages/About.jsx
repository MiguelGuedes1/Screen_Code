import React from 'react'
import { FaLink } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom"

// css
import styles from "./About.module.css"

const About = () => {


    return (
        <div className={styles.about}>

            <video className="backgroundVideo" autoPlay loop muted>
                <source src="videofundo.mp4" type="video/mp4" />

            </video>

            <h2>About CodeScreen</h2>
            <p>
                This app made in React was developed for a project of a programming course that I am taking and the main objective is show to the users the popular movies at the moment but the user can search for any other genre.. You will be able to explore details about each movie such as cast, synopsis, rating and much more.

                I have taken the time to develop this app to provide the best experience for movie lovers like you. I hope you enjoy browsing through the movie cards, discovering new stories and finding interesting recommendations.

                Feel free to explore the app and enjoy everything it has to offer. If you have any questions or suggestions, please do not hesitate to contact me. I hope you will find inspiration and entertainment while browsing the world of movies through my project.

            </p>

            <p className={styles.about_icons}>
                <Link to="https://github.com/MiguelGuedes1/screen_code" target="_blank" rel="noopener noreferrer"> <FaLink /> </Link>

            </p>

        </div>
    )
}

export default About