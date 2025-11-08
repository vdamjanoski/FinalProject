import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function DashboardHeader() {
   const [user, setUser] = useState(null);
 
   const token = localStorage.getItem("token")
 useEffect(() => {
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      setUser({
        id: decoded.id,
        name: decoded.name,
        role: decoded.role,
        desc: decoded.desc,
        email: decoded.email,
        phone: decoded.phone,
        skills: decoded.skills,
      });
    } catch (err) {
      console.log("Error decoding token:", err.message);
    }
  }, [token]);

  
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
                src="/kierra.png"
                alt="Logo"
                className="company-logo"
              />
              <p className="company-text">{user?.name}</p>
            </div>
          </div>
  );
}

export default DashboardHeader