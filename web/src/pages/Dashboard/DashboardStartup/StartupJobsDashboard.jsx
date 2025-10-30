import React, { useEffect, useState } from "react";
import "./StartupJobs.css";
import LeftSideStartup from "../DashboardMentor/LeftSide/LeftSideStartup";
import DashboardHeader from "./DashboardHeader";
import { jwtDecode } from "jwt-decode";

const jobs = [
  {
    id: 1,
    logo: "🔷",
    company: "TechWave Innovations",
    offer: "New Job Offer",
  },
  {
    id: 2,
    logo: "🟣",
    company: "TechWave Innovations",
    offer: "New Job Offer",
  },
  {
    id: 3,
    logo: "🔷",
    company: "TechWave Innovations",
    offer: "New Job Offer",
  },
  {
    id: 4,
    logo: "🔵",
    company: "TechWave Innovations",
    offer: "New Job Offer",
  },
];

/api/v1/jobs-startup

export default function StartupJobsDashboard() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showJobModal, setShowJobMolda] = useState(false)
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)

  const token = localStorage.getItem("token")

  const useEffect(() => {
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
        setData(res.data.allJobs || []);
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
        "http://localhost:10000/api/v1/job"
      )
    }
  }
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
          <button className="startup-jobs-btn">Create New Job</button>
        </div>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div className="job-card-feed" key={job.id}>
              <div className="job-logo">
                {job.logo}
                <h3 className="job-company">{job.company}</h3>
              </div>
              <div className="job-offer">{job.offer}</div>
              <div className="job-desc">
                Lorem Ipsum Dolor Sit Amet Consectetur Facilisis Nunc Ut Tellus
                Augue A aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis
                Prian.
              </div>
              <button className="view-more">View More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
