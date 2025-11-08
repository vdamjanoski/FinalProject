import './MentorProfileCard.css';
import DashboardHeader from './DashboardHeader';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function MentorProfileCard() {
  const [user, setUser] = useState(null);
  const [error,setError] = useState("");

  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) return;

    try{
      const decoded= jwtDecode(token);
      setUser({
        id: decoded.id,
        name: decoded.name,
        role: decoded.role,
        desc: decoded.desc,
        email: decoded.email,
        phone: decoded.phone,
        skills: decoded.skills,
      })
    }catch (err){
      console.log(err.message);
    }
  }, [token])
  
  
  console.log(user);

  return (
    <div className="mentor-page">
      <div className="mentor-main">
        <div className="mentor-card">
          <img
            className="mentor-avatar"
            src='/kierra.png'
            alt="Kierra Press"
          />
          <div className="mentor-info">
            <div className="mentor-name">{user?.name}</div>
            <div className="mentor-role">{user?.role}</div>
            <div className="mentor-contact">
              <div className="mentor-email">{user?.email}</div>
              <div className="mentor-phone">{user?.phone}</div>
            </div>
          </div>
        </div>
        <div className="mentor-about">
          <div className="mentor-about-header">
            <span>About Mentor</span>
          </div>
          <div className="mentor-skills">
            <b> {user?.skills && `Skills: ${user?.skills.join(" | ")}`}</b>
          </div>
          <div className="mentor-description">{user?.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default MentorProfileCard;