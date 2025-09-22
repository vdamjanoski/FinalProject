import { Outlet, useNavigate } from 'react-router-dom'
import './LeftSide.css'
export default function LeftSide() {
  const navigate = useNavigate;
  const logoutLogo = () => {
    localStorage.removeItem('token');
    navigate("/")
    console.log("clickedddd")
  }

  return(
          <div className="main-left-side">
            <div className="mentor-token-icon">
              <span className="mentor-token-logo">
                <img src="/Group8626.svg" alt="" />
              </span>
              <span>
                <img src="backicon.svg" alt="" />
              </span>
            </div>
            <div className="list-pages">
              <ul className="list-pages-links">
                <li className="list-dashboard">
                  <i>
                    <img src="dashboard.svg" alt="" />
                  </i>
                  Dashboard
                </li>
                <li className="list-dashboard">
                  <i>
                    <img src="mentors.svg" alt="" />
                  </i>
                  My Stats
                </li>
                <li className="list-dashboard">
                  <i>
                    <img src="tokens.svg" alt="" />
                  </i>
                  Job Feed
                </li>
              </ul>
            </div>
            <div className="logout">
                <img src="logout.svg" alt="" />
              <button className='left-side-button' onClick={logoutLogo()}>
                Logout
              </button>
            </div>
          </div>
          )
}