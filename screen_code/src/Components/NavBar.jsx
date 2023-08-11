import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDesktop } from 'react-icons/fa';

// css
import "./NavBar.css";

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setMobileMenuVisible(!isMobileMenuVisible); // Adicionamos esta linha para alternar a visibilidade ao clicar no botão do menu hamburguer
    };

    return (
        <nav className="navbar">
            <h2>
                <FaDesktop /> CodeScreen <FaDesktop />
            </h2>

            <ul className={isMobileMenuVisible ? 'open' : ''}>
                <li>
                    <Link to="/"> Home</Link>
                </li>

                <li>
                    <Link to="BestMovies"> Best Movies Ever</Link>
                </li>

                <li>
                    <Link to="About"> About the project </Link>
                </li>

                {/* Removemos o botão de menu hamburguer do <ul> */}
            </ul>

            {/* Mostramos o botão de menu hamburguer apenas quando a tela é menor que 665px */}
            {isMobileMenuOpen && (
                <span className="toggle-button" onClick={handleMobileMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
            )}

            {/* Adicionamos o botão de abertura do menu apenas quando a tela é menor que 665px */}
            {!isMobileMenuOpen && (
                <span className="toggle-button" onClick={handleMobileMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
            )}
        </nav>
    );
};

export default NavBar;
