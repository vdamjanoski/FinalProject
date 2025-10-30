import React, { useState } from "react";
import "./AssignedJobs.css";

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

function AssignedJobs() {
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
  );
}

export default AssignedJobs;