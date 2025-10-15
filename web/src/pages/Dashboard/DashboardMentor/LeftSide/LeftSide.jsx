import { Link, Outlet, useNavigate } from 'react-router-dom'
import './LeftSide.css'
import Logout from './Logout';
export default function LeftSide() {

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
                <Link className="list-dashboard" to={{pathname: '/mentor/dashboard'}}>
                  <i>
                    <img src="dashboard.svg" alt="" />
                  </i>
                  Dashboard
                </Link>
                <Link className="list-dashboard" to={{pathname: '/mentor/my-stats'}}>
                  <i>
                    <img src="mentors.svg" alt="" />
                  </i>
                  My Stats
                </Link>
                <Link className="list-dashboard" to={{pathname: '/mentor/job-feed'}}>
                  <i>
                    <img src="tokens.svg" alt="" />
                  </i>
                  Job Feed
                </Link>
              </ul>
            </div>
            <div className="logout">
                <img src="logout.svg" alt="" />
                <Logout/>
            </div>
          </div>
          )
}