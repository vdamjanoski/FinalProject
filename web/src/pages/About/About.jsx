import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Meet our team members</h1>
        <p>
          We Focus on the details of everything we do. All to help businesses
          around the world <br /> <br />
          Focus on what's most important to them.
        </p>
        <button className="signup-btn"> ➔ Get in touch</button>
      </div>
      <div className="about-main">
        <div className="about-card-top">
          <div className="about-card">
            <img src="Ian-Sorell.png" alt="" />
            <h5>Ian Sorell</h5>
            <span>CEO</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
          <div className="about-card">
            <img src="Maya-Matt.png" alt="" />
            <h5>Maya Matt</h5>
            <span>Founder</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
          <div className="about-card">
            <img src="Alex-Jensen.png" alt="" />
            <h5>Alex Jensen</h5>
            <span>CTO</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
          <div className="about-card">
            <img src="Keira-Battye.png" alt="" />
            <h5>Keira Battye</h5>
            <span>Product Designer</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="about-card-bottom">
          <div className="about-card">
            <img src="Dominic-Game.png" alt="" />
            <h5>Dominic Game</h5>
            <span>3D Artist</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
          <div className="about-card">
            <img src="James-Vial.png" alt="" />
            <h5>James Vial</h5>
            <span>Head of Front-End</span>
            <p>
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <div className="about-socials">
              <img src="card-facebook.svg" alt="" />
              <img src="card-git.svg" alt="" />
              <img src="card-linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
