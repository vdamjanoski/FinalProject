import React, { useEffect, useState } from "react";
import "./StartupJobs.css";
import LeftSideStartup from "../DashboardMentor/LeftSide/LeftSideStartup";
import DashboardHeader from "./DashboardHeader";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./StartupJobsDashboard.css"

export default function StartupJobsDashboard() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showJobModal, setShowJobModal] = useState(false)
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)

  const token = localStorage.getItem("token")

   useEffect(() => {
    if(!token) return;
    try{
      const decoded = jwtDecode(token)
      setUser({
        name: decoded.name,
        role: decoded.role,
        id: decoded.id
      })
    } catch(err) {
      console.log(err.message);
    }
  }, [token]);

  useEffect(() => {
    const fetchStartupJobs = async () => {
      try{
        const res = await axios.get(
          "http://localhost:10000/api/v1/jobs-startup",
          {
            headers: { Authorization: `Bearer ${token}`},
          }
        );
        setData(res.data.data.allJobs || []);
        console.log(res.data.data.allJobs);
      } catch(err){
        console.log("Fetch error: ", err.message);
      }
    };
    fetchStartupJobs();
  }, [token]);

  const createJob = async () => {
    if (!jobTitle.trim() || !jobDescription.trim()){
      console.log("Job title and job description required!");
      return;
    }
    try{
      const res = await axios.post(
        "http://localhost:10000/api/v1/job",
        {title: jobTitle, description: jobDescription},
        {headers: { Authorization: `Bearer ${token}`}}
      );

      if (res.status === 201) {
        console.log("Job created", res);
        setData((prev) => [...prev, res.data.data.newJob]);
        setShowModal(false)
        setJobTitle("")
        setJobDescription("")
      } else {
        console.log("Failed to create job");
      }
    }  catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="jobs-container">
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
        <div className="jobs-header">
          <h2>Your Startup Jobs</h2>
          <button className="startup-jobs-btn" onClick={() => setShowModal(true)}>Create New Job</button>
        </div>
        <div className="jobs-grid">
          {data.map((job) => (
            <div className="job-card-feed" key={job.id}>
              <div className="job-logo">
                <h3 className="job-company">{job.title}</h3>
              </div>
              <div className="job-offer">{job.status}</div>
              <div className="job-desc">{job.description}
              </div>
              <button className="view-more" onClick={() => {
                setSelectedJob(job);
                setShowJobModal(true);
              }}>View More</button>
            </div>
          ))}
        </div>

        {showModal && (
        <div className="modalBackdrop">
          <div className="modal">
            <span
              className="closeX"
              onClick={() => setShowModal(false)}
              title="Close"
            >
              &times;
            </span>
            <h3>Create New Job</h3>
            <input
              type="text"
              placeholder="Job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <textarea
              placeholder="Job description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
            <div className="modalButtons">
              <button onClick={createJob} className="saveBtn">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {showJobModal && selectedJob && (
  <div className="modalBackdrop">
    <div className="modal">
      <span
        className="closeX"
        onClick={() => setShowJobModal(false)}
      >
        &times;
      </span>

      <h3>{selectedJob.title}</h3>
      <p className="jobDescFull">{selectedJob.description}</p>
      <div className="jobInfo">
        <p><strong>Company:</strong> {user?.name || "Your Company"}</p>
        <p><strong>Created:</strong> {new Date(selectedJob.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}
