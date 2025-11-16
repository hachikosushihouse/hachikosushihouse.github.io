import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';
import logoImage from '../assets/images/hachiko-logo-dark-removebg.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <img
                src={logoImage}
                alt="Hachiko Sushi House"
                className="logo-image"
              />
            </a>
          </div>

          <div className="footer-social">
            <p>Follow us on social media</p>
            <div className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Hachiko Sushi House. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
