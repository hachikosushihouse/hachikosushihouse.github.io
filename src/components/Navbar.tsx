import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImage from '../assets/images/hachiko-logo-dark-removebg.png';
import { SECTIONS } from '../utils/constants';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

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

  // Close mobile menu on navigation
  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img
              src={logoImage}
              alt="Hachiko Sushi House"
              className="logo-image"
            />
          </Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          {/* <span></span> */}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className={activeSection === 'menu' ? 'active' : ''}>
            {/* TODO: FIX MENU UNDERLINE */}
            <Link
              to="/menu"
              className={`nav-link ${pathname === '/menu' ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <button>MENU</button>
            </Link>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <Link to="/#about" onClick={closeMenu}>
              <button>ABOUT</button>
            </Link>
          </li>
          <li className={activeSection === 'location' ? 'active' : ''}>
            <Link to="/#location" onClick={closeMenu}>
              <button>LOCATION</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
