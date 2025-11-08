import LeftSideStartup from "../Dashboard/DashboardMentor/LeftSide/LeftSideStartup";
import "./Main.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [user, setUser] = useState(null);
  const [mentors, setMentors] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (!token) return;
    try {
      const decoded = jwtDecode(token);
      setUser({
          name: decoded.name,
          role: decoded.role,
          id: decoded.id,
      });
    } catch (err) {
      console.warn("Failed to decode token", err);
    }
  }, [token]);

  const handleViewMentor = (mentorId) => {
    navigate(`/startup/mentors/${mentorId}`);
  };

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const resMentors = await axios.get(
          "http://localhost:10000/api/v1/getMentors",
          { headers }
        );
        const list = resMentors?.data.data || [];
        console.log("Mentors fetched:", list);
        setMentors(Array.isArray(list) ? list : []);
        console.log("Mentors:", mentors);
        

        const resApps = await axios.get(
          "http://localhost:10000/api/v1/applications/startup",
          { headers }
        );
        const applications = resApps?.data?.data || [];
        console.log(applications);
      } catch (err) {
        console.error("Error fetching mentors or jobs", err);
      }
    };

    fetchMentors();
  }, [token]);




  return (
    <main>
      <div className="main-card">
        <LeftSideStartup />
        <div className="main-center">
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
          <div className="mentors-main-card">
            <div className="cards-aside">
              <div className="mentors-personal-cards">
                {mentors.map((mentor) => (
                  <div className="mentors-personal-card" key={mentor?._id}>
                  <img
                    src="/mentors1.svg"
                    alt=""
                    className="mentors-personal-img"
                  />
                  <div className="mentors-personal-info">
                    <h3 className="mentors-name">{mentor?.name}</h3>
                          <div>★ ★ ★ ★ ☆</div>
                          <div>•</div>
                          <div>KPI-based</div>
                    <h4>
                      <b>Skills: {" "} {mentor?.skills?.join(" | ")} </b>
                    </h4>
                    <span className="view-mentor-flex">
                      <h5>
                        {mentor?.desc || "No description"}
                      </h5>
                      <button className="view-mentor-btn" onClick={() => {handleViewMentor(mentor._id)}}>View Mentor</button>
                    </span>
                  </div>
                </div>
                ))}
              </div>
              <aside className="aside">
                <div className="aside-title">
                  <p>Quick Overview</p>
                  <p>In the last month</p>
                </div>
                <div className="aside-cards">
                  <div className="aside-card">
                    <p>Total Mentors</p>
                    <p>
                      <b>{mentors.length}</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Assigned Jobs</p>
                    <p>
                      <b>63</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Monthly Progress</p>
                    <p>
                      <b>19%</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Tokens Reserved</p>
                    <p>
                      <b>35,125.00</b>
                    </p>
                  </div>
                </div>
                <div className="navigation-btns">
                  <button>
                    <img src="/left.png" alt="" />
                  </button>
                  <button>
                    <img src="/right.png" alt="" />
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
