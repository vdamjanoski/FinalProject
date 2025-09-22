import React, { useState } from "react";
import "./AssignedJobs.css";

const jobs = [
  { name: "Revenue per rate", status: "done" },
  { name: "ARPU (Average revenue per use)", status: "rejected" },
  { name: "CAC (Custom Acquisition Cost)", status: "inprogress" },
  { name: "Churn Rate", status: "done" },
  { name: "Burn Rate", status: "inprogress" },
  { name: "Operation Efficiency", status: "done" },
  { name: "Burn Rate", status: "inprogress" },
  { name: "Operation Efficiency", status: "done" },
  { name: "Burn Rate", status: "inprogress" },
  { name: "Operation Efficiency", status: "done" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Rejected", value: "rejected" },
  { label: "In Progress", value: "inprogress" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "done":
      return "status-done";
    case "rejected":
      return "status-rejected";
    case "inprogress":
      return "status-inprogress";
    default:
      return "";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "done":
      return "DONE";
    case "rejected":
      return "REJECTED";
    case "inprogress":
      return "IN PROGRESS";
    default:
      return "";
  }
};

const filterJobs = (jobs, filter) => {
  if (filter === "all") return jobs;
  return jobs.filter(job => job.status === filter);
};

function AssignedJobs() {
  const [activeTab, setActiveTab] = useState("all");
  const filteredJobs = filterJobs(jobs, activeTab);

  return (
    <div className="assigned-jobs">
      <h2>Assigned Jobs</h2>
      <div className="tabs">
        {tabs.map(tab => (
          <span
            key={tab.value}
            className={`tab ${activeTab === tab.value ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="job-list">
        {filteredJobs.map((job, idx) => (
          <div className="job-row" key={idx}>
            <span className="job-title">{job.name}</span>
            <span className={`job-status ${getStatusClass(job.status)}`}>
              {getStatusLabel(job.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignedJobs;