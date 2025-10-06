
import React from 'react';

import StartBlock from '../Blocks/CornerBlock/StartBlock/StartBlock';
import PrisonBlock from '../Blocks/CornerBlock/PrisonBlock/PrisonBlock';
import VacationBlock from '../Blocks/CornerBlock/VacationBlock/VacationBlock';
import GoToJailBlock from '../Blocks/CornerBlock/GoToJailBlock/GoToJailBlock';
import './Board.css';

const BOARD_SIZE = 13; // 13x13 grid: 2 corner + 9 properties + 2 corner per side
const BLOCKS_PER_SIDE = BOARD_SIZE - 1;

// Helper to generate placeholder cells

// Helper to get absolute position and rotation for each block index (0-39)
function getBlockPosition(idx) {
  // Board is a square, 0 is bottom-right (Start), goes counter-clockwise
  const size = 100; // percent
  const cell = 100 / (BOARD_SIZE - 1);
  let left = 0, top = 0, rotate = 0;
  if (idx < BLOCKS_PER_SIDE) { // Bottom row, right to left
    left = size - cell * (idx + 1);
    top = size - cell;
    rotate = 0;
  } else if (idx < BLOCKS_PER_SIDE * 2) { // Left col, bottom to top
    left = 0;
    top = size - cell * (idx - BLOCKS_PER_SIDE + 1);
    rotate = 90;
  } else if (idx < BLOCKS_PER_SIDE * 3) { // Top row, left to right
    left = cell * (idx - BLOCKS_PER_SIDE * 2);
    top = 0;
    rotate = 180;
  } else { // Right col, top to bottom
    left = size - cell;
    top = cell * (idx - BLOCKS_PER_SIDE * 3);
    rotate = -90;
  }
  return { left: `${left}%`, top: `${top}%`, rotate };
}


// Define the 40 Monopoly blocks in order (starting from top-left, going clockwise)
const boardBlocks = [
  // Top row (left to right)
  { type: 'corner', name: 'GO' },
  { type: 'city', name: 'Dubai' },
  { type: 'treasure', name: 'Treasure' },
  { type: 'city', name: 'Abu Dhabi' },
  { type: 'tax', name: 'Income Tax' },
  { type: 'airport', name: 'Dubai Intl. Airport' },
  { type: 'city', name: 'Tokyo' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Osaka' },
  { type: 'utility', name: 'Electric Company' },
  { type: 'city', name: 'Kyoto' },
  // Right column (top to bottom, skip corners)
  { type: 'corner', name: 'Jail' },
  { type: 'city', name: 'Beijing' },
  { type: 'airport', name: 'Beijing Capital Airport' },
  { type: 'city', name: 'Shanghai' },
  { type: 'treasure', name: 'Treasure' },
  { type: 'city', name: 'Guangzhou' },
  { type: 'tax', name: 'Property Tax' },
  { type: 'city', name: 'Moscow' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'St. Petersburg' },
  // Bottom row (right to left)
  { type: 'corner', name: 'Vacation' },
  { type: 'city', name: 'Novosibirsk' },
  { type: 'airport', name: 'Sheremetyevo Airport' },
  { type: 'city', name: 'Delhi' },
  { type: 'utility', name: 'Water Company' },
  { type: 'city', name: 'Mumbai' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Bangalore' },
  { type: 'tax', name: 'Luxury Tax' },
  { type: 'city', name: 'Paris' },
  { type: 'city', name: 'Lyon' },
  // Left column (bottom to top, skip corners)
  { type: 'corner', name: 'Go to Jail' },
  { type: 'city', name: 'Marseille' },
  { type: 'airport', name: 'Charles de Gaulle Airport' },
  { type: 'city', name: 'London' },
  { type: 'treasure', name: 'Jackpot' },
  { type: 'city', name: 'Manchester' },
  { type: 'surprise', name: 'Surprise' },
  { type: 'city', name: 'Birmingham' },
  { type: 'tax', name: 'Income Tax' },
  { type: 'city', name: 'New York' },
  { type: 'city', name: 'Los Angeles' },
];


const Board = () => {
  const cells = [];
  const propertiesPerSide = 9; // 9 properties between corners
  
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
    cells.push(
      <div key={`top-${i}`} className="board-cell property-block side-top" style={{ gridColumn: `${3 + i} / ${4 + i}`, gridRow: '1 / 3' }}>
        {/* Property content will go here */}
      </div>
    );
  }
  
  // Right side properties (9 properties, spanning columns 12-13)
  for (let i = 0; i < propertiesPerSide; i++) {
    cells.push(
      <div key={`right-${i}`} className="board-cell property-block side-right" style={{ gridColumn: '12 / 14', gridRow: `${3 + i} / ${4 + i}` }}>
        {/* Property content will go here */}
      </div>
    );
  }
  
  // Bottom side properties (9 properties, spanning rows 12-13)
  for (let i = 0; i < propertiesPerSide; i++) {
    cells.push(
      <div key={`bottom-${i}`} className="board-cell property-block side-bottom" style={{ gridColumn: `${11 - i} / ${12 - i}`, gridRow: '12 / 14' }}>
        {/* Property content will go here */}
      </div>
    );
  }
  
  // Left side properties (9 properties, spanning columns 1-2)
  for (let i = 0; i < propertiesPerSide; i++) {
    cells.push(
      <div key={`left-${i}`} className="board-cell property-block side-left" style={{ gridColumn: '1 / 3', gridRow: `${11 - i} / ${12 - i}` }}>
        {/* Property content will go here */}
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
    <div className="board-container">
      {cells}
    </div>
  );
};

export default Board;
