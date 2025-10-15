import DashboardHeader from "../DashboardStartup/DashboardHeader";
import StartupJobs from "../DashboardStartup/StartupJobs";
import LeftSide from "./LeftSide/LeftSide";
import './DashboardMentor.css'
import MentorStatsDown from "./MentorStatsDown";
import MentorProfileCard from "../DashboardStartup/MentorProfileCard";

function MentorMyStats(){
    return(
        <div className='dashboard'>
            <LeftSide />
            <div className='dashboard-center'>
                <DashboardHeader/>
            <div className='mentor-stats-main'>
                <MentorProfileCard/>
                <MentorStatsDown/>
            </div>
            </div>
            </div>
    )
}

export default MentorMyStats;