import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logoImage from '../assets/images/hachiko_logo-removebg.png';
import { SECTIONS } from '../utils/constants';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            for (const section of SECTIONS) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Close menu after clicking
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">
                        <img
                            src={logoImage}
                            alt="Hachiko Sushi House"
                            className="logo-image"
                        />
                    </a>
                </div>

                <div
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className={activeSection === 'menu' ? 'active' : ''}>
                        <a href="/menu"><button>MENU</button></a>
                    </li>
                    <li className={activeSection === 'about' ? 'active' : ''}>
                        <a href="/#about"><button>ABOUT</button></a>
                    </li>
                    <li className={activeSection === 'location' ? 'active' : ''}>
                        <button onClick={() => scrollToSection('location')}>
                            LOCATION
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
