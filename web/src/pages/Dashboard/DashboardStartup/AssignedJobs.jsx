import React, { useEffect, useState } from "react";
import "./AssignedJobs.css";

function AssignedJobs() {
  const token = localStorage.getItem("token")
  const [filter, setFilter] = useState("ALL");
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!token) return;
      try{
        const res = await fetch("http://localhost:10000/api/v1/jobs", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        if (!res.ok){
          throw new Error(`Error fetching jobs`);
        }
        const data = await res.json();
        setJobsData(data);
      } catch(err){
        console.log("Error fetching jobs", err);
      }
    }
    fetchJobs();
  }, [token])
  
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