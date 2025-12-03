import { useRef } from 'react';
import '../styles/Location.css';
import {
  STREET_ADDRESS,
  HOURS,
  CITY,
  EMAIL,
  GOOGLE_MAPS_URL,
} from '../utils/constants';
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
              <a href="tel:+14803897415">(480) 389-7415</a>
            </div>
            <Hours hours={HOURS} />
          </div>
        </div>
        <div className="location-content-right">
          <div className="location-map">
            <iframe src={GOOGLE_MAPS_URL} className="google-maps"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
