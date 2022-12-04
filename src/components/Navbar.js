import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    const navRef = useRef();
    const [activeLink, setActiveLink] = useState(1);

    function showNavbar() {
        navRef.current.classList.toggle('responsive-nav');
    }

    function handleClick(id) {
        setActiveLink(id);
    }

    return (
        <header>
            <h2 className='logo'>Mes3B</h2>
            <nav className='nav-items' ref={navRef}>
                <a href="/#" className={activeLink === 1 ? 'active' : ''} onClick={e => handleClick(1)}>Pagrindinis</a>
                <a href="/#" className={activeLink === 2 ? 'active' : ''} onClick={e => handleClick(2)}>Klase</a>
                <a href="/#" className={activeLink === 3 ? 'active' : ''} onClick={e => handleClick(3)}>Galerija</a>
                <a href="/#" className={activeLink === 4 ? 'active' : ''} onClick={e => handleClick(4)}>Apie</a>
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