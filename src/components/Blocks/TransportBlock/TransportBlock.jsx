import React from 'react';
import { FaPlane } from 'react-icons/fa';
import './TransportBlock.css';

const TransportBlock = ({ name, country, price, side = 'top' }) => {
  return (
    <div className={`transport-block transport-${side}`}>
      <div className="transport-icon-section">
        <FaPlane className="transport-icon" />
      </div>
      <div className="transport-info">
        <div className="transport-label">AIRPORT</div>
        <div className="transport-name">{name}</div>
        <div className="transport-country">{country}</div>
      </div>
      <div className="transport-price-section">
        <div className="price-label">PRICE</div>
        <div className="transport-price">{price}</div>
      </div>
    </div>
  );
};

export default TransportBlock;
