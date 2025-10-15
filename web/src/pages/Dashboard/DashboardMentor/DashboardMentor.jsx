import AssignedJobs from '../DashboardStartup/AssignedJobs';
import DashboardHeader from '../DashboardStartup/DashboardHeader';
import ApplicationsSent from '../DashboardStartup/ApplicationsSent'
import PendingJobs from '../DashboardStartup/PendingJobs'
import LeftSide from '../DashboardMentor/LeftSide/LeftSide'
import './DashboardMentor.css'

function DashboardMentor() {
    return(
        <div className='dashboard'>
            <LeftSide />
            <div className='dashboard-center'>
                <DashboardHeader/>
            <div className='dashboard-main'>
                <AssignedJobs/>
                <div className='dashboard-rightside'>
                <PendingJobs/>
                <ApplicationsSent/>
                </div>
            </div>
            </div>
            </div>
    )
}

export default DashboardMentor;