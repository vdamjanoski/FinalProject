import { useState } from "react";
import MentorInfo from "./MentorInfo";
import "./MyStats.css";
import { useNavigate } from "react-router-dom";
import Logout from "../DashboardMentor/LeftSide/Logout";
import LeftSideStartup from "../DashboardMentor/LeftSide/LeftSideStartup";

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

const offers = [
  { title: "Revenue per rate" },
  { title: "ARPU (Average revenue per use)" },
  { title: "CAC (Custom Aquisition Cost)" },
];

function MyStats() {
  const navigate = useNavigate();
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
                src="/eclipse.png"
                alt="Logo"
                className="company-logo"
              />
              <span className="company-text">TechWave Innovations</span>
            </div>
          </div>
          <div className="mentor-details-wrapper">
            <MentorInfo />
          </div>

          <div className="jobs-dashboard-wrapper">
            <div className="jobs-dashboard-grid">
              <div>
                <div className="assigned-jobs">
                  <h2>Assigned Jobs</h2>
                  <div className="tabs">
                    {["ALL", "DONE", "CANCELED", "IN PROGRESS"].map((tab) => (
                      <button
                        key={tab}
                        className={`tab-button ${
                          filter === tab ? "active" : ""
                        }`}
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
              <div>
                <div className="pending-offers-section">
                  <div className="pending-offers-title">Pending Job Offers</div>
                  <div className="pending-offers-list">
                    {offers.map((offer, idx) => (
                      <div className="pending-offer-card" key={idx}>
                        <span className="pending-offer-title">
                          {offer.title}
                        </span>
                        <button className="pending-offer-btn">
                          Cancel Offer
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyStats;
