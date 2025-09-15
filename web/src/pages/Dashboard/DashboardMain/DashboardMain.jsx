import LeftSide from '../LeftSide/LeftSide';
import './DashboardMain.css'

function DashboardMain() {
    return(
        <div className='dashboard'>
            <form>
            <i>
                <img src="search.svg" alt="" className="search-logo" />
              </i>
              <input
                type="text"
                placeholder="Search Mentor..."
                className="search-mentor-input"
                />
            </form>
                <LeftSide/>
        </div>
    )
}

export default DashboardMain;