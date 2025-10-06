import React from 'react';
import './TransportBlock.css';

const TransportBlock = ({ name, type, price }) => {
  return (
    <div className="transport-block">
      <div className="transport-name">{name}</div>
      <div className="transport-type">{type}</div>
      <div className="transport-price">{price}</div>
    </div>
  );
};

export default TransportBlock;
