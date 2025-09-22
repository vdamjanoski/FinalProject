import React from 'react';
import './DashboardHeader.css';

function DashboardHeader() {
  return (
    <div className="header">
      <input className="search-bar" type="text" placeholder="Search Mentor..." />
      <div className="profile">
        <img className="avatar" src="image.jpg" alt="Avatar" />
        <div className="company-info">
          <span className="company-name">TechWave</span>
          <span className="company-title">Innovations</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader