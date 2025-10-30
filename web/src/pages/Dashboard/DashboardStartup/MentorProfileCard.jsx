import './MentorProfileCard.css';
import DashboardHeader from './DashboardHeader';

function MentorProfileCard() {
  return (
    <div className="mentor-page">
      <div className="mentor-main">
        <div className="mentor-card">
          <img
            className="mentor-avatar"
            src='/public/kierra.png'
            alt="Kierra Press"
          />
          <div className="mentor-info">
            <div className="mentor-name">Kierra Press</div>
            <div className="mentor-role">Sales Representative</div>
            <div className="mentor-contact">
              <div className="mentor-email">mentormail@gmail.com</div>
              <div className="mentor-phone">+389 77 653 234</div>
            </div>
          </div>
        </div>
        <div className="mentor-about">
          <div className="mentor-about-header">
            <span>About Mentor</span>
            <button className="mentor-offer-btn">+ Offer New Job</button>
          </div>
          <div className="mentor-skills">
            <b>Skills: Sales | Management | Problem-solving</b>
          </div>
          <div className="mentor-description">
Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis.           </div>
        </div>
      </div>
    </div>
  );
}

export default MentorProfileCard;