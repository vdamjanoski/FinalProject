import React from 'react';

function DashboardHeader() {
  return (
    <div className="header-container">
           <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search Mentor..."
              />
            </div>
            <div className="company-profile">
              <img
                src="/public/kierra.png"
                alt="Logo"
                className="company-logo"
              />
              <span className="company-text">Kirra Press</span>
            </div>
          </div>
  );
}

export default DashboardHeader