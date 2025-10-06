import React from 'react';
import { GiImprisoned } from 'react-icons/gi';
import './GoToJailBlock.css';


const GoToJailBlock = () => (
  <div className="gotojail-block">
    <div className="corner-content">
      <span className="corner-label gotojail-label">GO TO JAIL</span>
      <span className="gotojail-icon-bar">
        <GiImprisoned size={56} style={{ color: '#fff', width: '100%' }} />
      </span>
    </div>
  </div>
);

export default GoToJailBlock;
