import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />
      <div className="card-content">
        <h2>
          {destination.name}, <span className="location">{destination.location}</span>
        </h2>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
