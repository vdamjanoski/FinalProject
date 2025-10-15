import React from 'react';
import './StartupJobs.css';

const jobs = [
  { id: 1, logo: '🔷', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 2, logo: '🟣', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 3, logo: '🔷', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 4, logo: '🔵', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 5, logo: '🟥', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 6, logo: '🔵', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 7, logo: '🟡', company: 'TechWave Innovations', offer: 'New Job Offer' },
  { id: 8, logo: '🟤', company: 'TechWave Innovations', offer: 'New Job Offer' }
];

export default function StartupJobs() {
  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h2>All startup Jobs</h2>
        <div className="jobs-controls">
          <div className="jobs-sort">
            <label>Sort by:</label>
            <select>
              <option>Popular</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="jobs-category">
            <label>Category:</label>
            <select>
              <option>All Category</option>
              <option>Tech</option>
              <option>Business</option>
            </select>
          </div>
          <button className="jobs-filters">Filters</button>
          <button className="jobs-gridicon">⛶</button>
        </div>
      </div>
      <div className="jobs-grid">
        {jobs.map(job => (
          <div className="job-card" key={job.id}>
            <div className="job-logo">{job.logo}</div>
            <h3 className="job-company">{job.company}</h3>
            <div className="job-offer">{job.offer}</div>
            <div className="job-desc">
              Lorem Ipsum Dolor Sit Amet Consectetur Facilisis Nunc Ut Tellus Augue
              A aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Prian.
            </div>
            <button className="view-more">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}