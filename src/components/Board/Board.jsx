
import React, { useState } from 'react';

import StartBlock from '../Blocks/CornerBlock/StartBlock/StartBlock';
import PrisonBlock from '../Blocks/CornerBlock/PrisonBlock/PrisonBlock';
import VacationBlock from '../Blocks/CornerBlock/VacationBlock/VacationBlock';
import GoToJailBlock from '../Blocks/CornerBlock/GoToJailBlock/GoToJailBlock';
import TransportBlock from '../Blocks/TransportBlock/TransportBlock';
import PropertyDetailCard from '../PropertyDetailCard/PropertyDetailCard';
import './Board.css';

const BOARD_SIZE = 13; // 13x13 grid: 2 corner + 9 properties + 2 corner per side

// Board layout: 40 blocks total, arranged in a square
// Starting from top-left (START), going clockwise around the board
// Layout: 11 blocks per side (1 corner + 9 properties + 1 corner)
// Corner blocks span 2x2 grid cells, property blocks span 1x2 or 2x1

// Define the 40 Monopoly blocks in order (starting from top-left START, going clockwise)
const boardBlocks = [
  // Top row (left to right) - 11 blocks
  { type: 'corner', name: 'START' },
  { type: 'city', name: 'Dubai', country: 'UAE', price: '$60' },
  { type: 'treasure', name: 'Treasure' },
  { type: 'city', name: 'Abu Dhabi', country: 'UAE', price: '$60' },
  { type: 'tax', name: 'Income Tax', amount: '5%' },
  { type: 'airport', name: 'Dubai Intl. Airport', country: 'UAE', price: '$200' },
  { type: 'city', name: 'Tokyo', country: 'Japan', price: '$100' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Osaka', country: 'Japan', price: '$100' },
  { type: 'utility', name: 'Electric Company', price: '$150' },
  { type: 'city', name: 'Kyoto', country: 'Japan', price: '$120' },
  // Right column (top to bottom) - 11 blocks
  { type: 'corner', name: 'Prison / Just Visiting' },
  { type: 'city', name: 'Beijing', country: 'China', price: '$140' },
  { type: 'airport', name: 'Beijing Capital Airport', country: 'China', price: '$200' },
  { type: 'city', name: 'Shanghai', country: 'China', price: '$140' },
  { type: 'treasure', name: 'Treasure' },
  { type: 'city', name: 'Guangzhou', country: 'China', price: '$160' },
  { type: 'tax', name: 'Property Tax', amount: '10%' },
  { type: 'city', name: 'Moscow', country: 'Russia', price: '$180' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'St. Petersburg', country: 'Russia', price: '$180' },
  // Bottom row (right to left) - 11 blocks
  { type: 'corner', name: 'Go to Jail' },
  { type: 'city', name: 'Novosibirsk', country: 'Russia', price: '$200' },
  { type: 'airport', name: 'Sheremetyevo Airport', country: 'Russia', price: '$200' },
  { type: 'city', name: 'Delhi', country: 'India', price: '$220' },
  { type: 'utility', name: 'Water Company', price: '$150' },
  { type: 'city', name: 'Mumbai', country: 'India', price: '$220' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Bangalore', country: 'India', price: '$240' },
  { type: 'tax', name: 'Luxury Tax', amount: '$100' },
  { type: 'city', name: 'Paris', country: 'France', price: '$260' },
  { type: 'city', name: 'Lyon', country: 'France', price: '$260' },
  // Left column (bottom to top) - 11 blocks
  { type: 'corner', name: 'Vacation / Free Parking' },
  { type: 'city', name: 'Marseille', country: 'France', price: '$280' },
  { type: 'airport', name: 'Charles de Gaulle Airport', country: 'France', price: '$200' },
  { type: 'city', name: 'London', country: 'UK', price: '$300' },
  { type: 'treasure', name: 'Jackpot' },
  { type: 'city', name: 'Manchester', country: 'UK', price: '$300' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Birmingham', country: 'UK', price: '$320' },
  { type: 'tax', name: 'Income Tax', amount: '5%' },
  { type: 'city', name: 'New York', country: 'USA', price: '$350' },
  { type: 'city', name: 'Los Angeles', country: 'USA', price: '$400' },
];


const Board = () => {
  const cells = [];
  const propertiesPerSide = 9; // 9 properties between corners
  const [selectedBlock, setSelectedBlock] = useState(null);
  
  // Helper function to get block data by index (excluding corners)
  const getBlockData = (side, index) => {
    // Map to boardBlocks array (skip corner at start of each side)
    let blockIndex;
    if (side === 'top') {
      blockIndex = 1 + index; // Skip START corner
    } else if (side === 'right') {
      blockIndex = 12 + index; // After top-right corner
    } else if (side === 'bottom') {
      blockIndex = 23 + index; // After bottom-right corner
    } else { // left
      blockIndex = 34 + index; // After bottom-left corner
    }
    return boardBlocks[blockIndex];
  };

  // Handle block click
  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  // Close modal
  const closeModal = () => {
    setSelectedBlock(null);
  };
  
  // Add corners first (2x2 blocks)
  // Top-left corner (START)
  cells.push(
    <div key="corner-start" className="board-cell corner-block" style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
      <StartBlock />
    </div>
  );
  
  // Top-right corner (Prison/Just Visiting)
  cells.push(
    <div key="corner-prison" className="board-cell corner-block" style={{ gridColumn: '12 / 14', gridRow: '1 / 3' }}>
      <PrisonBlock />
    </div>
  );
  
  // Bottom-left corner (Vacation/Free Parking)
  cells.push(
    <div key="corner-vacation" className="board-cell corner-block" style={{ gridColumn: '1 / 3', gridRow: '12 / 14' }}>
      <VacationBlock />
    </div>
  );
  
  // Bottom-right corner (Go To Jail)
  cells.push(
    <div key="corner-gotojail" className="board-cell corner-block" style={{ gridColumn: '12 / 14', gridRow: '12 / 14' }}>
      <GoToJailBlock />
    </div>
  );
  
  // Add property blocks (rectangles that span 2 rows or 2 columns)
  // Top side properties (9 properties, spanning rows 1-2)
  for (let i = 0; i < propertiesPerSide; i++) {
    const block = getBlockData('top', i);
    cells.push(
      <div 
        key={`top-${i}`} 
        className="board-cell property-block side-top clickable" 
        style={{ gridColumn: `${3 + i} / ${4 + i}`, gridRow: '1 / 3' }}
        onClick={() => handleBlockClick(block)}
      >
        {block.type === 'airport' ? (
          <TransportBlock name={block.name} country={block.country} price={block.price} side="top" />
        ) : (
          <div style={{ textAlign: 'center', fontSize: 'clamp(0.5rem, 1vmin, 0.8rem)' }}>{block.name}</div>
        )}
      </div>
    );
  }
  
  // Right side properties (9 properties, spanning columns 12-13)
  for (let i = 0; i < propertiesPerSide; i++) {
    const block = getBlockData('right', i);
    cells.push(
      <div 
        key={`right-${i}`} 
        className="board-cell property-block side-right clickable" 
        style={{ gridColumn: '12 / 14', gridRow: `${3 + i} / ${4 + i}` }}
        onClick={() => handleBlockClick(block)}
      >
        {block.type === 'airport' ? (
          <TransportBlock name={block.name} country={block.country} price={block.price} side="right" />
        ) : (
          <div style={{ textAlign: 'center', fontSize: 'clamp(0.5rem, 1vmin, 0.8rem)' }}>{block.name}</div>
        )}
      </div>
    );
  }
  
  // Bottom side properties (9 properties, spanning rows 12-13)
  for (let i = 0; i < propertiesPerSide; i++) {
    const block = getBlockData('bottom', i);
    cells.push(
      <div 
        key={`bottom-${i}`} 
        className="board-cell property-block side-bottom clickable" 
        style={{ gridColumn: `${11 - i} / ${12 - i}`, gridRow: '12 / 14' }}
        onClick={() => handleBlockClick(block)}
      >
        {block.type === 'airport' ? (
          <TransportBlock name={block.name} country={block.country} price={block.price} side="bottom" />
        ) : (
          <div style={{ textAlign: 'center', fontSize: 'clamp(0.5rem, 1vmin, 0.8rem)' }}>{block.name}</div>
        )}
      </div>
    );
  }
  
  // Left side properties (9 properties, spanning columns 1-2)
  for (let i = 0; i < propertiesPerSide; i++) {
    const block = getBlockData('left', i);
    cells.push(
      <div 
        key={`left-${i}`} 
        className="board-cell property-block side-left clickable" 
        style={{ gridColumn: '1 / 3', gridRow: `${11 - i} / ${12 - i}` }}
        onClick={() => handleBlockClick(block)}
      >
        {block.type === 'airport' ? (
          <TransportBlock name={block.name} country={block.country} price={block.price} side="left" />
        ) : (
          <div style={{ textAlign: 'center', fontSize: 'clamp(0.5rem, 1vmin, 0.8rem)' }}>{block.name}</div>
        )}
      </div>
    );
  }
  
  // Center area - single merged block for game information
  cells.push(
    <div key="center-area" className="board-cell center-area" style={{ gridColumn: '3 / 12', gridRow: '3 / 12' }}>
      <div className="game-info">
        <h2>Monopoly</h2>
        <p>Dice, actions, and game info will display here</p>
      </div>
    </div>
  );
  
  return (
    <>
      <div className="board-container">
        {cells}
      </div>
      
      {/* Property Detail Modal */}
      {selectedBlock && (
        <div className="modal-overlay" onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <PropertyDetailCard block={selectedBlock} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
