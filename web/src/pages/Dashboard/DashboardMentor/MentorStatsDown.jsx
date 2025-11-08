import React from 'react';
import './MentorStatsDown.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function MentorStatsDown() {
    const [user, setUser] = useState(null);
  const [statsData, setStatsData] = useState({
  total: 0,
  assigned: 0,
  applied: 0,
  finished: 0,
});
const [chartData, setChartData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      setUser({
        id: decoded.id,
        name: decoded.name,
        photo: decoded.photo,
        role: decoded.type,
        desc: decoded.desc,
        email: decoded.email,
        phone: decoded.phone,
        skills: decoded.skills,
      });
    } catch (err) {
      console.log("Failed to decode token");
    }
  }, [token]);

  useEffect(() => {

    if (!user?.id) return;
    const fetchUser = async () => {
      

      try {
        const res = await axios.get(
          `http://localhost:10000/api/v1/user/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched user:", res.data.data.user);
        setUser(res.data.data.user);
      } catch (err) {
        console.log(err.message);
      }
    };

   
fetchUser();
    
    
  }, [user?.id, token]);

   useEffect(() => {
  const fetchStats = async () => {
    if (!user?.id) return;

    try {
      const res = await axios.get(
        `http://localhost:10000/api/v1/application/mentor/${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const apps = res.data.data; 

      setStatsData({
        total: apps.length,
        assigned: apps.filter(app => app.acceptedStatus === "in progress").length,
        applied: apps.filter(app => app.applicationType === "mentorToCompany").length,
        finished: apps.filter(app => app.acceptedStatus === "done").length,
      });
      
      const allMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      const monthlyCounts = {};

      allMonths.forEach(m => {
  monthlyCounts[m] = { month: m, done: 0, inProgress: 0, rejected: 0 };
});
      apps.forEach(app => {
        const created = new Date(app.createdAt);
        const month = created.toLocaleString("default", { month: "short" });

        if (!monthlyCounts[month]) {
          monthlyCounts[month] = { month, done: 0, inProgress: 0, rejected: 0 };
        }

        if (app.acceptedStatus === "done") {
          monthlyCounts[month].done++;
        } else if (app.acceptedStatus === "in progress") {
          monthlyCounts[month].inProgress++;
        } else if (app.acceptedStatus === "rejected") {
          monthlyCounts[month].rejected++;
        }
      });

      setChartData(Object.values(monthlyCounts));
    } catch (err) {
      console.log("Error fetching stats:", err.message);
    }
    
  };

  fetchStats();
}, [user, token]);
  return (
    <div className="mentor-down-container">
      <div className="mentor-down-left">
        <div className="mentor-down-title">Performance Over Time</div>
        <div className="statistics-card-mentor">
          <div className="statistics-title-mentor">STATISTICS</div>
          <div className="statistics-subtitle-mentor">
            Overall target accomplishment over the year
          </div>
          <svg width="540" height="300" viewBox="0 0 260 130">
            <polyline
              fill="none"
              stroke="#793ef6"
              strokeWidth="3"
              points="0,120 20,115 40,105 60,70 80,65 100,40 120,30 140,30 160,40 180,70 200,80 220,90 240,95 260,100"
            />
            <text x="0" y="20" fontSize="10">5,000</text>
            <text x="5" y="125" fontSize="10">Nov</text>
            <text x="35" y="125" fontSize="10">Dec</text>
            <text x="55" y="125" fontSize="10">Jan</text>
            <text x="75" y="125" fontSize="10">Feb</text>
            <text x="95" y="125" fontSize="10">Mar</text>
            <text x="115" y="125" fontSize="10">Apr</text>
            <text x="135" y="125" fontSize="10">May</text>
            <text x="155" y="125" fontSize="10">Jun</text>
            <text x="175" y="125" fontSize="10">Jul</text>
            <text x="195" y="125" fontSize="10">Aug</text>
            <text x="215" y="125" fontSize="10">Sep</text>
            <text x="235" y="125" fontSize="10">Oct</text>
          </svg>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="overview-title">Quick Overview</div>
        <div className="overview-card">
          <div className="overview-label">Total Jobs</div>
          <div className="overview-value">132</div>
        </div>
        <div className="overview-card">
          <div className="overview-label">Total Assigned Jobs</div>
          <div className="overview-value">43</div>
        </div>
        <div className="overview-card">
          <div className="overview-label">Jobs That You Have Applied</div>
          <div className="overview-value">21</div>
        </div>
        <div className="overview-card finished">
          <div className="overview-label">Finished Jobs</div>
          <div className="overview-value">63</div>
        </div>
      </div>
    </div>
  );
}