import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

export default function Navbar() {
    const navRef = useRef();

    function showNavbar() {
        navRef.current.classList.toggle('responsive-nav');
    }

    return (
        <header>
            <h2 className='logo'>Mes3B</h2>
            <nav className='nav-items' ref={navRef}>
                <NavLink to='/'>Pagrindinis</NavLink> 
                <NavLink to='/Naujienos'>Naujienos</NavLink>
                <NavLink to='/Klase'>Klase</NavLink>
                <NavLink to='/Apie'>Apie</NavLink>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}