import "./DashBoardStartup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatisticsCard from "./StatisticsCard";
import LeftSide from "../DashboardMentor/LeftSide/LeftSide";
import LeftSideStartup from "../DashboardMentor/LeftSide/LeftSideStartup";
import AssignedJobs from "./AssignedJobs";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const mentors = [
  {
    name: "Lucie Weber",
    image: "/lucie.png",
    jobs: 18,
  },
  {
    name: "Crystal Porter",
    image: "/crystal.png",
    jobs: 51,
  },
];

function DashboardStartup() {
  const token = localStorage.getItem("token");
  const [jobsData, setJobsData] = useState([]);
  const [user, setUser] = useState(null);
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
        photo: decoded.photo,
        skills: decoded.skills,
      });
    } catch (err) {
      console.log(err.message); 
    }
  }, [token]);

  console.log("User:", user);
  useEffect(() => {
    const fetchJobs = async () => {
      if (!token) return;
      try {
        const res = await fetch(
          "http://localhost:10000/api/v1/applications/startup",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const text = await res.text();
        console.log("Response:", text);

        if (!res.ok) {
          throw new Error(`Error fetching jobs`);
        }
        const data = JSON.parse(text);
        console.log(data.data);
        setJobsData(data.data);
      } catch (err) {
        console.log("Error fetching jobs", err);
      }
    };
    fetchJobs();
  }, [token]);

  const [filter, setFilter] = useState("ALL");
  const filteredJobs =
    filter === "ALL"
      ? jobsData
      : jobsData.filter((job) => {
          if (filter === "done") return job.acceptedStatus === "done";
          if (filter === "rejected") return job.acceptedStatus === "rejected";
          if (filter === "in progress")
            return job.acceptedStatus === "in progress";
          return true;
        });
  console.log("Filtered jobs:", filteredJobs[0]);
  console.log("token:", user);

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
              <img src="/default.jpg" alt="Logo" className="company-logo" />
              <span className="company-text">{user?.name}</span>
            </div>
          </div>
          <div className="main-startup-dashboard">
            <div>
              <div className="assigned-jobs-dashboard">
                <h2>Assigned Jobs</h2>
                <div className="tabs">
                  {["all", "done", "rejected", "in progress"].map((tab) => (
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
                    <div key={job._id} className="job-card">
                      <span className="job-title">{job.jobId?.title}</span>
                      <span
                        className={`job-status status-${job.acceptedStatus
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {job.acceptedStatus.toUpperCase()}
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
