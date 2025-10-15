import React from 'react';
import './MentorStatsDown.css';

export default function MentorStatsDown() {
  return (
    <div className="mentor-down-container">
      <div className="mentor-down-left">
        <div className="mentor-down-title">Performance Over Time</div>
        <div className="statistics-card">
          <div className="statistics-title">STATISTICS</div>
          <div className="statistics-subtitle">
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