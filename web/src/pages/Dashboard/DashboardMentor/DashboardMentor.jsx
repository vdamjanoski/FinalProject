import AssignedJobs from '../DashboardStartup/AssignedJobs';
import DashboardHeader from '../DashboardStartup/DashboardHeader';
import LeftSide from '../DashboardMentor/LeftSide/LeftSide'
import './DashboardMentor.css'
import '../DashboardStartup/PendingJobs.css'
import '../DashboardStartup/ApplicationsSent.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


function DashboardMentor() {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState(null)
    const [filter, setFilter] = useState("All");
    const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser({
        name: decoded.name,
        photo: decoded.photo,
        role: decoded.userType,
        id: decoded.id,
      });
    } catch (err) {
      console.log("Failed to decode token");
    }
  }, [token]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:10000/api/v1/application/mentor/${user.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const apps = res.data.data || [];
        setApplications(apps);
      } catch (err) {
        console.log("Error fetching the data:", err.response || err.message);
      }
    };

    fetchData();
  }, [user, token]);
const handleAcceptOffer = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:10000/api/v1/application/${id}`,
        { 
          status: "assigned",
          acceptedStatus: "in progress" 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedApp = res.data.data;

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? updatedApp : app))
      );
      
      alert("Job offer accepted successfully!");
    } catch (err) {
      console.error("Error accepting offer:", err.response || err.message);
      alert("Failed to accept offer. Please try again.");
    }
  };

  const handleRejectOffer = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:10000/api/v1/application/${id}`,
        { acceptedStatus: "rejected" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedApp = res.data.data;

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? updatedApp : app))
      );
      
      alert("Job offer rejected.");
    } catch (err) {
      console.error("Error rejecting offer:", err.response || err.message);
      alert("Failed to reject offer. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:10000/api/v1/application/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setApplications((prev) => prev.filter((app) => app._id !== id));
    } catch (err) {
      console.error("Error deleting app:", err.response || err.message);
    }
  };

    const pendingJobs = applications
    .filter(
      (app) =>
        app.applicationType === "companyToMentor" && app.acceptedStatus === "in progress")
    console.log(pendingJobs, "Pending jobs");
    console.log("Applications:", applications);
    
    const sentApplications = applications
    .filter(
      (app) =>
        app.applicationType === "mentorToCompany")


    return(
        <div className='dashboard'>
            <LeftSide />
            <div className='dashboard-center'>
                <DashboardHeader/>
            <div className='dashboard-main'>
                <AssignedJobs/>
                <div className='dashboard-rightside'>
                  <div className="pending-jobs-container">
    <h2>Pending Jobs</h2>
    <p className="jobs-offered">Jobs offered from your startup</p>
    <div className="jobs-list">
      {pendingJobs.map((job, idx) => (
        <div className="job-item" key={job._id}>
          <span className="job-name">{job.jobId?.title}</span>
          {job.companyId && (
                        <p>From: {job?.companyId?.name}</p>
                      )}
                      {job?.jobId?.description && (
                        <p>{job?.jobId?.description}</p>
                      )}
          <div className="job-actions">
            <button className="accept-btn" onClick={() => handleAcceptOffer(job._id)}>Accept</button>
            <button className="reject-btn" onClick={() => handleRejectOffer(job._id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  </div>
                <div className="container">
      <h2 className="title">Applications sent</h2>
      <p className="subtitle">Jobs you have applied to</p>
      {sentApplications.map((app) => (
        <div className='cards'>
            <div className="card" key={app._id}>{app.jobId?.title}</div>
            <button onClick={() => handleDelete(app._id)}>Delete</button>
        </div>
      ))}
      
    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default DashboardMentor;