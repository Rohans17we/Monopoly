import React from 'react';
import './UtilityBlock.css';

const UtilityBlock = ({ name, price }) => {
  return (
    <div className="utility-block">
      <div className="utility-name">{name}</div>
      <div className="utility-price">{price}</div>
    </div>
  );
};

export default UtilityBlock;
