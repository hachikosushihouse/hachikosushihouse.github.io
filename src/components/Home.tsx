import { useEffect, useRef } from 'react';
import logoImage from '../assets/images/hachiko-logo-dark-removebg.png';
import '../styles/Home.css';

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => subtitleRef.current?.classList.add('animate-in'), 300);
    setTimeout(() => buttonRef.current?.classList.add('animate-in'), 600);
  }, []);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <div className="container">
        <div className="home-content">
          <div className="home-logo-image-container">
            <img
              src={logoImage}
              alt="Hachiko logo"
              className="home-logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
