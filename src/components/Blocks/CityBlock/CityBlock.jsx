import React from 'react';
import './CityBlock.css';

const CityBlock = ({ city, country, price }) => {
  return (
    <div className="city-block">
      <div className="city-name">{city}</div>
      <div className="country-name">{country}</div>
      <div className="city-price">{price}</div>
    </div>
  );
};

export default CityBlock;
