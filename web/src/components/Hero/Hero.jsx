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
      <main>
        <p className="title-main">
          Every{" "}
          <b>
            <span className="blue-word">success</span>
          </b>{" "}
          is rewarded!
        </p>
        <div className="main-card">
          <div className="main-left-side">
            <div className="mentor-token-icon">
              <span className="mentor-token-logo">
                <img src="Group8626.svg" alt="" />
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
                <li className="list-mentor">
                  <i>
                    <img src="mentors.svg" alt="" />
                  </i>
                  Mentors
                </li>
                <li className="list-tokens">
                  <i>
                    <img src="tokens.svg" alt="" />
                  </i>
                  Tokens
                </li>
              </ul>
            </div>
            <div className="logout">
              <button>
                <img src="logout.svg" alt="" className="logout-img" />
                Logout
              </button>
            </div>
          </div>
          <div className="main-center">
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
            <div className="mentors-main-img">
              <img src="mentors-main-img.svg" alt="" />
            </div>
            <div className="mentors-main-card">
              <div className="mentors-card-navigation">
                <div className="mentors-text">
                  <p className="mentors-title">
                    <b>Mentors</b>
                  </p>
                  <p className="mentors-paragraph">
                    Monitor and add new mentors
                  </p>
                </div>
                <div className="mentors-btns">
                  <button className="add-new-mentor">
                    <i>
                      <img src="Shape.png" alt="" />
                    </i>{" "}
                    Add New Mentor
                  </button>
                  <button className="create-new-job">Create New Job</button>
                </div>
              </div>
              <div className="cards-aside">
                <div className="mentors-personal-cards">
                  <div className="mentors-personal-card">
                    <img
                      src="mentors1.svg"
                      alt=""
                      className="mentors-personal-img"
                    />
                    <div className="mentors-personal-info">
                      <h3 className="mentors-name">Kierra Press</h3>
                      ...
                      <h4>
                        <b>Skills: Sales | Management | Problem-solving</b>
                      </h4>
                      <span className="view-mentor-flex">
                        <h5>
                          Field sales training. 5+ years in an outside sales
                          position
                        </h5>
                        <button className="view-mentor-btn">View Mentor</button>
                      </span>
                    </div>
                  </div>
                  <div className="mentors-personal-card">
                    <img
                      src="mentors2.svg"
                      alt=""
                      className="mentors-personal-img"
                    />
                    <div className="mentors-personal-info">
                      <h3 className="mentors-name">Alison Vetrovs</h3>
                      ...
                      <h4>
                        <b>Skills: Sales | Management | Problem-solving</b>
                      </h4>
                      <span className="view-mentor-flex">
                        <h5>
                          The sales representative position is an OR based sales role with uncapp...
                        </h5>
                        <button className="view-mentor-btn">View Mentor</button>
                      </span>
                    </div>
                  </div>
                  <div className="mentors-personal-card">
                    <img
                      src="mentors3.svg"
                      alt=""
                      className="mentors-personal-img"
                    />
                    <div className="mentors-personal-info">
                      <h3 className="mentors-name">Marcus Carder</h3>
                      ...
                      <h4>
                        <b>Skills: Leadership | Management | Product sales</b>
                      </h4>
                      <span className="view-mentor-flex">
                        <h5>
                          Field sales training. 5+ years in an outside sales
                          position
                        </h5>
                        <button className="view-mentor-btn">View Mentor</button>
                      </span>
                    </div>
                  </div>
                </div>
                <aside className="aside">
                  <div className="aside-title">
                    <p>Quick Overview</p>
                    <p>In the last month</p>
                  </div>
                  <div className="aside-cards">
                    <div className="aside-card">
                      <p>Total Mentors</p>
                      <p><b>32</b></p>
                    </div>
                    <div className="aside-card">
                      <p>Assigned Jobs</p>
                      <p><b>63</b></p>
                    </div>
                    <div className="aside-card">
                      <p>Monthly Progress</p>
                      <p><b>19%</b></p>
                    </div>
                    <div className="aside-card">
                      <p>Tokens Reserved</p>
                      <p><b>35,125.00</b></p>
                    </div>
                  </div>
                  <div className="navigation-btns">
                    <button><img src="left.png" alt="" /></button>
                    <button><img src="right.png" alt="" /></button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Hero;
