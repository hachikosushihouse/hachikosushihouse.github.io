import { useRef } from 'react';
import '../styles/Location.css';
import { STREET_ADDRESS, HOURS, CITY, EMAIL } from '../utils/constants';
import Hours from './cards/Hours';

const Location = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section id="location" className="location-section" ref={sectionRef}>
            <h1 className="section-title">Visit Us</h1>
            <div className="location-content">
                <div className="location-content-left">
                    <div className="location-text">
                        <h1 className="card-title">Hachiko Sushi House</h1>
                        <div className="location-address">
                            <p>{STREET_ADDRESS}</p>
                            <p>{CITY}</p>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        </div>
                        <Hours hours={HOURS} />
                    </div>
                </div>
                <div className="location-content-right">
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3505089010378!2d-112.0778722237119!3d33.46622407338324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1240ecd71cd5%3A0x95986bc14692bd30!2s1616%20N%20Central%20Ave%2C%20Phoenix%2C%20AZ%2085004!5e0!3m2!1sen!2sus!4v1762372272959!5m2!1sen!2sus"
                            className="google-maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Location;
