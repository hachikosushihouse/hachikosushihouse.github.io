import { motion } from 'framer-motion';
import '../../styles/cards/Hours.css';

interface HoursProps {
  hours: { day: string; open: string; close: string }[];
}

const Hours = ({ hours }: HoursProps) => {
  const todayIndex = new Date().getDay();

  return (
    <div className="hours-container">
      <div className="hours-content">
        <h1 className="card-title">Hours</h1>
        <motion.ul
          className="hours-list"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {hours.map((h, idx) => (
            <li
              key={h.day}
              className={`${idx === todayIndex ? 'today' : ''} ${h.open.toLowerCase() === 'closed' ? 'closed' : ''}`}
            >
              <span className="day">{h.day}: </span>
              <span className="time">
                {h.open.trim().toLowerCase() === 'closed'
                  ? 'Closed'
                  : `${h.open} - ${h.close}`}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Hours;
