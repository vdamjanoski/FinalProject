import DashboardHeader from "../DashboardStartup/DashboardHeader";
import StartupJobs from "../DashboardStartup/StartupJobs";
import LeftSide from "./LeftSide/LeftSide";
import './DashboardMentor.css'

function MentorJobFeed(){
    return(
        <div className='dashboard'>
            <LeftSide />
            <div className='dashboard-center'>
                <DashboardHeader/>
            <div className='dashboard-main'>
                <StartupJobs/>
            </div>
            </div>
            </div>
    )
}

export default MentorJobFeed;