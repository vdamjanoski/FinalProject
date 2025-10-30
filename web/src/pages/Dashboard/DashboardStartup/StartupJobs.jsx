import React from 'react';
import './StartupJobs.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'

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
  const [offers, setOffers] = useState([]);
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) return;

    try{
      const decoded = jwtDecode(token);
      console.log(decoded)
      setUser({
        id: decoded.id,
        name: decoded.name,
        role: decoded.role,
        desc: decoded.desc,
        email: decoded.email,
        phone: decoded.phone,
        skills: decoded.skills,
      })
    } catch (err) {
      console.log("fail");
    }
  }, [token]);

  useEffect(() => {
     if (!user || !user.id) return;

    const fetchOffers = async () => {
      try{
        const res = await fetch('http://localhost:10000/api/v1/jobs',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const data = await res.json();
        console.log("Api response:", data);
        
        setOffers(data.data?.allJobs || []);
        console.log(data.data?.allJobs);
        
      }catch(err){
        console.log(err.message);
      }
    }
    fetchOffers();
  }, [user, token]
)
  
  return (
    <div>
      <div className="jobs-header">
        <h2>Your Startup Jobs</h2>
      </div>
      <div className="jobs-grid">
        {offers.map((offer) => {
          return(
          <div className="job-card-feed" key={offer._id}>
            <div className="job-logo">{offer.title}
            <h3 className="job-company">{offer.companyId.name}</h3>
            </div>
            <div className="job-offer">{offer.status}</div>
            <div className="job-desc">
              {offer.description}
            </div>
            <button className="view-more">View More</button>
          </div>
          )
        }
        )}
      </div>
    </div>
  );
}