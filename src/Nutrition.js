import React from 'react';
import './Nutrition.css';
import imgSrc from '../src/assets/illust_1.svg';

const Nutrition = () => {
  return (
    <div className="nutrition-section">
      <div className='heading-container'>
        <h1 className="diet-plan">Need Diet Plan?</h1>
        <br />
        <h2 className="appointment">Book Free Nutrition Service 🥗</h2>
        <img className="image" src={imgSrc} alt="Illustration" />
      </div>
    
      <div className="calendar-iframe-container" style={{ margin: '0 20px' }}>
        <iframe
          src="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU05M2NGcnhlZG5QfGRlZmF1bHR8MzAwOWUxOTNhMDViNDFkNmE2MWI4MDlhOGNjM2I3Yzg"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default Nutrition;
