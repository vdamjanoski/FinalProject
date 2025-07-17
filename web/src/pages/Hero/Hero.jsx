import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="title">
            <p>
              Grow your StartUp! <br /> Monitoring and <br /> Evaluating now is
              easy!
            </p>
          </div>
          <p className="title-paragraph">
            Welcome to Mentor Token, where we redefine the dynamics of start-up{" "}
            <br />
            sucess. Our innovative platform offers a transformative approach to{" "}
            <br />
            mentorship, ensuring that mentors are not just engaged but motivated{" "}
            <br />
            to drive the success of the ventures they support.
          </p>
          <div className="hero-btns">
            <button className="signup-btn"> ➔ Get Started</button>
            <a href="" className="login-btn">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="Scene2.svg" alt="scene2" />
        </div>
      </div>

      <div className="sponsor-logos">
        <div className="sponsor-logos1">
          <img src="adobe.svg" alt="adobe" />
          <img src="braze.svg" alt="braze" />
          <img src="hellosign.svg" alt="hellosign" />
          <img src="maze.svg" alt="maze" />
          <img src="ghost.svg" alt="ghost" />
        </div>
        <div className="sponsor-logos2">
          <img src="atlassian.svg" alt="atlassian" />
          <img src="treehouse.svg" alt="treehouse" />
          <img src="intercom.svg" alt="intercom" />
          <img src="opendoor.svg" alt="opendoor" />
          <img src="hubspot.png" alt="hubspot" />
        </div>
      </div>

      <p className="sponsor-logos-paragraph">
        More than 25+ Startups around the <br />
        world trusted Mentor Token.
      </p>

      <article className="article">
        <div className="article-image">
          <img src="rocket.png" alt="" />
        </div>
        <div className="article-paragraph">
          <h5 className="article-title">FEATURES</h5>
          <p className="article-main-text">
            Boost Your Startup's Journey: <br />
            Discover Mentor Token's Robust <br />
            Features
          </p>
        </div>
        <div className="article-cards">
          <div className="article-card">
            <span>
              <img src="icon1.png" alt="icon1" className="acticle-icon" />
            </span>
            <h4 className="article-title">Goal Setting</h4>
            <p className="article-text">
              Set clear and achievable goals for your startup's success.
            </p>
          </div>
          <div className="article-card">
            <span>
              <img src="icon2.png" alt="" className="acticle-icon" />
            </span>
            <h4 className="article-title">Performance Tracking</h4>
            <p className="article-text">
              Monitor mentor performance in real-time and track progress.
            </p>
          </div>
          <div className="article-card">
            <span>
              <img src="icon3.png" alt="" className="acticle-icon" />
            </span>
            <h4 className="article-title">Reward System</h4>
            <p className="article-text">
              Motivate mentors with a secure and rewarding token-based reward
              system.
            </p>
          </div>
          <div className="article-card">
            <span>
              <img src="icon4.png" alt="" className="acticle-icon" />
            </span>
            <h4 className="article-title">Knowledge Library</h4>
            <p className="article-text">
              Access a comprehensive knowledge library to equip mentors with the
              skills, and motivation
            </p>
          </div>
        </div>
      </article>
      <p className="title-main">Every <span className="blue-word">success</span> is rewarded!</p>
      <div className="main-page">
      <img src="main-page.svg" alt="" />
      </div>
    </div>
  );
}
export default Hero;
