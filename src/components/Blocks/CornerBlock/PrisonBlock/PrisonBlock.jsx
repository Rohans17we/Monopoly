import React from 'react';
import { GiPrisoner } from 'react-icons/gi';
import './PrisonBlock.css';

const PrisonBlock = () => (
  <div className="jail-block">
    <div className="corner-content">
      <span className="corner-label jail-label">PRISON</span>
      <span className="jail-icon-bar">
        <GiPrisoner size={56} style={{ color: '#fff', width: '100%' }} />
      </span>
    </div>
  </div>
);

export default PrisonBlock;
