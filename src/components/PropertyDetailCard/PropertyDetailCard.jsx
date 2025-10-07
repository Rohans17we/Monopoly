import React from 'react';
import { FaPlane } from 'react-icons/fa';
import './PropertyDetailCard.css';

const PropertyDetailCard = ({ block, onClose }) => {
  if (!block) return null;

  // Helper function to get country flag code
  const getCountryCode = (country) => {
    const codes = {
      'UAE': 'ae',
      'Japan': 'jp',
      'China': 'cn',
      'Russia': 'ru',
      'India': 'in',
      'France': 'fr',
      'UK': 'gb',
      'USA': 'us'
    };
    return codes[country] || 'ae';
  };

  const renderAirportDetails = () => (
    <div className="detail-card airport-card">
      <div 
        className="card-header airport-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://flagcdn.com/w320/${getCountryCode(block.country)}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <FaPlane className="card-icon" />
        <h2 className="card-title">{block.name}</h2>
        <p className="card-subtitle">{block.country}</p>
      </div>

      <div className="card-body">
        <div className="price-section">
          <span className="label">Purchase Price</span>
          <span className="value price-value">{block.price}</span>
        </div>

        <div className="divider"></div>

        <div className="rent-section">
          <h3 className="section-title">Rental Income</h3>
          <div className="rent-table">
            <div className="rent-row">
              <span className="rent-label">1 Airport owned</span>
              <span className="rent-value">$25</span>
            </div>
            <div className="rent-row">
              <span className="rent-label">2 Airports owned</span>
              <span className="rent-value">$50</span>
            </div>
            <div className="rent-row">
              <span className="rent-label">3 Airports owned</span>
              <span className="rent-value">$100</span>
            </div>
            <div className="rent-row highlight">
              <span className="rent-label">All 4 Airports owned</span>
              <span className="rent-value">$200</span>
            </div>
          </div>
        </div>

        <div className="info-note">
          <p>Rent increases based on the number of airports you own. Owning all 4 airports provides maximum rental income!</p>
        </div>
      </div>
    </div>
  );

  const renderCityDetails = () => (
    <div className="detail-card city-card">
      <div 
        className="card-header city-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://flagcdn.com/w320/${getCountryCode(block.country)}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="card-title">{block.name}</h2>
        <p className="card-subtitle">{block.country}</p>
      </div>

      <div className="card-body">
        <div className="price-section">
          <span className="label">Purchase Price</span>
          <span className="value price-value">{block.price}</span>
        </div>

        <div className="divider"></div>

        <div className="rent-section">
          <h3 className="section-title">Rental Income</h3>
          <div className="rent-table">
            <div className="rent-row">
              <span className="rent-label">Base Rent</span>
              <span className="rent-value">{getCityRent(block.name, 'base')}</span>
            </div>
            <div className="rent-row">
              <span className="rent-label">With 1 House</span>
              <span className="rent-value">{getCityRent(block.name, '1house')}</span>
            </div>
            <div className="rent-row">
              <span className="rent-label">With 2 Houses</span>
              <span className="rent-value">{getCityRent(block.name, '2houses')}</span>
            </div>
            <div className="rent-row">
              <span className="rent-label">With 3 Houses</span>
              <span className="rent-value">{getCityRent(block.name, '3houses')}</span>
            </div>
            <div className="rent-row highlight">
              <span className="rent-label">With Hotel</span>
              <span className="rent-value">{getCityRent(block.name, 'hotel')}</span>
            </div>
          </div>
        </div>

        <div className="info-note">
          <p>Own all cities in {block.country} to build houses. Base rent doubles when you own the complete set!</p>
        </div>
      </div>
    </div>
  );

  const renderUtilityDetails = () => (
    <div className="detail-card utility-card">
      <div className="card-header utility-header">
        <h2 className="card-title">{block.name}</h2>
      </div>

      <div className="card-body">
        <div className="price-section">
          <span className="label">Purchase Price</span>
          <span className="value price-value">{block.price}</span>
        </div>

        <div className="divider"></div>

        <div className="rent-section">
          <h3 className="section-title">Rental Income</h3>
          <div className="rent-table">
            <div className="rent-row">
              <span className="rent-label">1 Utility owned</span>
              <span className="rent-value">4× dice roll</span>
            </div>
            <div className="rent-row highlight">
              <span className="rent-label">Both Utilities owned</span>
              <span className="rent-value">10× dice roll</span>
            </div>
          </div>
        </div>

        <div className="info-note">
          <p>Rent is calculated by multiplying the dice roll by 4 (one utility) or 10 (both utilities).</p>
        </div>
      </div>
    </div>
  );

  const renderTaxDetails = () => (
    <div className="detail-card tax-card">
      <div className="card-header tax-header">
        <h2 className="card-title">{block.name}</h2>
      </div>

      <div className="card-body">
        <div className="tax-amount">
          <span className="label">Tax Amount</span>
          <span className="value tax-value">{block.amount}</span>
        </div>

        <div className="info-note">
          <p>
            {block.name === 'Income Tax' && 'Pay 5% of your total cash on hand.'}
            {block.name === 'Property Tax' && 'Pay 10% of your total property value.'}
            {block.name === 'Luxury Tax' && 'Pay a fixed luxury tax.'}
          </p>
        </div>
      </div>
    </div>
  );

  const renderCardDetails = () => (
    <div className="detail-card special-card">
      <div className="card-header special-header">
        <h2 className="card-title">{block.name}</h2>
      </div>

      <div className="card-body">
        <div className="info-note">
          <p>
            {block.type === 'treasure' && 'Draw a Treasure card and follow the instructions!'}
            {block.type === 'surprise' && 'Draw a Surprise card and follow the instructions!'}
          </p>
        </div>
      </div>
    </div>
  );

  // Render appropriate card based on block type
  if (block.type === 'airport') return renderAirportDetails();
  if (block.type === 'city') return renderCityDetails();
  if (block.type === 'utility') return renderUtilityDetails();
  if (block.type === 'tax') return renderTaxDetails();
  if (block.type === 'treasure' || block.type === 'surprise') return renderCardDetails();
  
  return null;
};

// Helper function to get city color by country
const getCityColor = (country) => {
  const colors = {
    'UAE': 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
    'Japan': 'linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)',
    'China': 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
    'Russia': 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
    'India': 'linear-gradient(135deg, #ff0000 0%, #dc143c 100%)',
    'France': 'linear-gradient(135deg, #ffff00 0%, #ffd700 100%)',
    'UK': 'linear-gradient(135deg, #00ff00 0%, #32cd32 100%)',
    'USA': 'linear-gradient(135deg, #0000ff 0%, #00008b 100%)',
  };
  return colors[country] || 'linear-gradient(135deg, #808080 0%, #696969 100%)';
};

// Helper function to get city rent values
const getCityRent = (cityName, rentType) => {
  const rentData = {
    'Dubai': { base: '$2', '1house': '$10', '2houses': '$30', '3houses': '$90', 'hotel': '$160' },
    'Abu Dhabi': { base: '$4', '1house': '$20', '2houses': '$60', '3houses': '$180', 'hotel': '$320' },
    'Tokyo': { base: '$6', '1house': '$30', '2houses': '$90', '3houses': '$270', 'hotel': '$400' },
    'Osaka': { base: '$6', '1house': '$30', '2houses': '$90', '3houses': '$270', 'hotel': '$400' },
    'Kyoto': { base: '$8', '1house': '$40', '2houses': '$100', '3houses': '$300', 'hotel': '$450' },
    'Beijing': { base: '$10', '1house': '$50', '2houses': '$150', '3houses': '$450', 'hotel': '$625' },
    'Shanghai': { base: '$10', '1house': '$50', '2houses': '$150', '3houses': '$450', 'hotel': '$625' },
    'Guangzhou': { base: '$12', '1house': '$60', '2houses': '$180', '3houses': '$500', 'hotel': '$700' },
    'Moscow': { base: '$14', '1house': '$70', '2houses': '$200', '3houses': '$550', 'hotel': '$750' },
    'St. Petersburg': { base: '$14', '1house': '$70', '2houses': '$200', '3houses': '$550', 'hotel': '$750' },
    'Novosibirsk': { base: '$16', '1house': '$80', '2houses': '$220', '3houses': '$600', 'hotel': '$800' },
    'Delhi': { base: '$18', '1house': '$90', '2houses': '$250', '3houses': '$700', 'hotel': '$875' },
    'Mumbai': { base: '$18', '1house': '$90', '2houses': '$250', '3houses': '$700', 'hotel': '$875' },
    'Bangalore': { base: '$20', '1house': '$100', '2houses': '$300', '3houses': '$750', 'hotel': '$925' },
    'Paris': { base: '$22', '1house': '$110', '2houses': '$330', '3houses': '$800', 'hotel': '$975' },
    'Lyon': { base: '$22', '1house': '$110', '2houses': '$330', '3houses': '$800', 'hotel': '$975' },
    'Marseille': { base: '$24', '1house': '$120', '2houses': '$360', '3houses': '$850', 'hotel': '$1025' },
    'London': { base: '$26', '1house': '$130', '2houses': '$390', '3houses': '$900', 'hotel': '$1100' },
    'Manchester': { base: '$26', '1house': '$130', '2houses': '$390', '3houses': '$900', 'hotel': '$1100' },
    'Birmingham': { base: '$28', '1house': '$150', '2houses': '$450', '3houses': '$1000', 'hotel': '$1200' },
    'New York': { base: '$35', '1house': '$175', '2houses': '$500', '3houses': '$1100', 'hotel': '$1300' },
    'Los Angeles': { base: '$50', '1house': '$200', '2houses': '$600', '3houses': '$1400', 'hotel': '$1700' },
  };
  
  return rentData[cityName]?.[rentType] || 'N/A';
};

export default PropertyDetailCard;
