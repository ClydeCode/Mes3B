import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
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
                <a href="/#">Pagrindinis</a>
                <a href="/#">Klase</a>
                <a href="/#">Galerija</a>
                <a href="/#">Apie</a>
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