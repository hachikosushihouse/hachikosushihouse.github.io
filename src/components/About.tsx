import { useEffect, useRef } from 'react';
import hachiImage from '../assets/images/sushi-restaurant.jpg';
import '../styles/About.css';
import logoImage from '../assets/images/hachiko_logo-removebg.png';

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current?.classList.add('animate-in');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-content">
                <div className="about-content-left">
                    <div className="about-image-container">
                        <img src={hachiImage} alt="About" className="about-image" />
                    </div>
                </div>
                <div className="about-content-right">
                    <div className="about-title-image-container">
                        <img src={logoImage} alt="Hachiko" className="about-title-image" />
                    </div>
                    <p className="about-text">
                        Hachiko Sushi House brings fresh, Japanese-inspired flavors to the
                        neighborhood. Our chefs prepare every roll and dish with attention
                        to quality and balance, offering something for sushi lovers at every
                        level. From classic favorites to new creations, we're here to
                        provide a comfortable, friendly dining experience for everyone who
                        walks through our doors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
