import React from 'react';
import { RiHotelBedFill } from 'react-icons/ri';
import './VacationBlock.css';

const VacationBlock = () => (
  <div className="vacation-block">
    <div className="corner-content">
      <span className="corner-label vacation-label">VACATION</span>
      <span className="vacation-emoji">
        <RiHotelBedFill size={56} style={{ color: '#bfa100', width: '100%' }} />
      </span>
    </div>
  </div>
);

export default VacationBlock;
