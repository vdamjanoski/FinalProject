import "./PendingJobs.css";

const jobs = [
  { name: "Revenue per rate" },
  { name: "ARPU (Average revenue per use)" },
  { name: "CAC (Custom Aqusition Cost)" },
];

const PendingJobs = () => (
  <div className="pending-jobs-container">
    <h2>Pending Jobs</h2>
    <p className="jobs-offered">Jobs offered from your startup</p>
    <div className="jobs-list">
      {jobs.map((job, idx) => (
        <div className="job-item" key={idx}>
          <span className="job-name">{job.name}</span>
          <div className="job-actions">
            <button className="accept-btn">Accept</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PendingJobs;