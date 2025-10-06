import React from 'react';
import './TaxBlock.css';

const TaxBlock = ({ type, amount }) => {
  return (
    <div className="tax-block">
      <div className="tax-type">{type}</div>
      <div className="tax-amount">{amount}</div>
    </div>
  );
};

export default TaxBlock;
