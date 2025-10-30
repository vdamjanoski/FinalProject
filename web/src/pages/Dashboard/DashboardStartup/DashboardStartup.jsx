import "./DashBoardStartup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatisticsCard from "./StatisticsCard";
import LeftSide from "../DashboardMentor/LeftSide/LeftSide";
import LeftSideStartup from "../DashboardMentor/LeftSide/LeftSideStartup";
import AssignedJobs from "./AssignedJobs";

const mentors = [
  {
    name: "Lucie Weber",
    image: "/public/lucie.png",
    jobs: 18,
  },
  {
    name: "Crystal Porter",
    image: "/public/crystal.png",
    jobs: 51,
  },
];

const jobsData = [
  { id: 1, title: "Revenue per rate", status: "DONE" },
  { id: 2, title: "ARPU (Average revenue per use)", status: "CANCELED" },
  { id: 3, title: "CAC (Custom Acquisition Cost)", status: "IN PROGRESS" },
  { id: 4, title: "Churn Rate", status: "DONE" },
  { id: 5, title: "Burn Rate", status: "IN PROGRESS" },
  { id: 6, title: "Operation Efficiency", status: "DONE" },
  { id: 7, title: "Burn Rate", status: "IN PROGRESS" },
  { id: 8, title: "Operation Efficiency", status: "DONE" },
];

function DashboardStartup() {
  const [filter, setFilter] = useState("ALL");
  const filteredJobs =
    filter === "ALL"
      ? jobsData
      : jobsData.filter((job) => {
          if (filter === "DONE") return job.status === "DONE";
          if (filter === "CANCELED") return job.status === "CANCELED";
          if (filter === "IN PROGRESS") return job.status === "IN PROGRESS";
          return true;
        });
  return (
    <div>
      <div className="Main-Container">
        <LeftSideStartup />
        <div className="Mentor-Container">
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
                src="/public/eclipse.png"
                alt="Logo"
                className="company-logo"
              />
              <span className="company-text">TechWave Innovations</span>
            </div>
          </div>
          <div className="main-startup-dashboard">
            <div>
              <div className="assigned-jobs-dashboard">
                <h2>Assigned Jobs</h2>
                <div className="tabs">
                  {["ALL", "DONE", "CANCELED", "IN PROGRESS"].map((tab) => (
                    <button
                      key={tab}
                      className={`tab-button ${filter === tab ? "active" : ""}`}
                      onClick={() => setFilter(tab)}
                    >
                      {tab.charAt(0) + tab.slice(1).toLowerCase()}
                    </button>
                  ))}
                </div>

                <div className="job-list">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="job-card">
                      <span className="job-title">{job.title}</span>
                      <span
                        className={`job-status status-${job.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mentors-section">
              <div className="card-box">
                <div className="mentor-section">
                  <h3 className="mentor-title">Best Performing Mentors</h3>
                  <div className="mentor-card-startup">
                    {mentors.map((mentor, i) => (
                      <div className="mentor-row" key={mentor.name}>
                        <div className="performing-mentor-avatar-wrap">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="performing-mentor-avatar"
                          />
                        </div>
                        <div className="mentor-details">
                          <div className="mentor-name">{mentor.name}</div>
                        </div>
                        <div className="mentor-jobs">
                          <span className="mentor-jobs-count">
                            {mentor.jobs}
                          </span>
                          <div className="mentor-label">Achieved Jobs</div>
                        </div>
                        <div className="mentor-icon">
                          <svg width="24" height="24" fill="none">
                            <path
                              d="M14 7l5 5-5 5M19 12H5"
                              stroke="#9e9dcc"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="statistics-section card-box">
                <StatisticsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardStartup;
