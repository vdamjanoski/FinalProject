import { Link, Outlet, useNavigate } from 'react-router-dom'
import Logout from './Logout';
export default function LeftSide() {

  return(
          <div className="sidebar-mentor">
      <div className="sidebar-header-mentor">
        <div className="logo">
          <img src="/Group8626.svg" alt="" className="img-mentor"/>
        </div>
      </div>
      <div className="sidebar-menu-mentor">
      <Link className="menu-item-mentor" to={{pathname: '/mentor/dashboard'}}>
      <img src="/dashboard.svg" className="menu-icon-mentor" />
          <p>Dashboard</p>
      </Link>
        <Link to={{pathname: '/mentor/my-stats'}} className='menu-item-mentor active'>
        <img src="/profile.svg" className="menu-icon-mentor" />
          <p>My Stats</p>
        </Link>
        <Link to={{pathname: '/mentor/job-feed'}} className='menu-item-mentor'>
        <img src="/disc.svg" className="menu-icon-mentor" />
          <p>Job Feed</p>
        </Link>
      </div>
      <div className="sidebar-footer-mentor">
        <Logout/>
      </div>
    </div>
          )
}