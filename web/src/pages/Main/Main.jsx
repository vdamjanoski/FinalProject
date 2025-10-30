import LeftSideStartup from "../Dashboard/DashboardMentor/LeftSide/LeftSideStartup";
import "./Main.css";

function Main() {
  return (
    <main>
      <div className="main-card">
        <LeftSideStartup />
        <div className="main-center">
          <div className="header-container">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search Mentor..."
              />
            </div>
            <div className="company-profile">
              <img
                src="/public/eclipse.png"
                alt="Logo"
                className="company-logo"
              />
              <span className="company-text">TechWave Innovations</span>
            </div>
          </div>
          <div className="mentors-main-card">
            <div className="mentors-card-navigation">
              <div className="mentors-text">
                <p className="mentors-title">
                  <b>My Mentors</b>
                </p>
                <p className="mentors-paragraph">Monitor and add new mentors</p>
              </div>
              <div className="mentors-btns">
                <button className="add-new-mentor">
                  <i>
                    <img src="/public/Shape.png" alt="" />
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
                    src="/public/mentors1.svg"
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
                    src="/public/mentors2.svg"
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
                        The sales representative position is an OR based sales
                        role with uncapp...
                      </h5>
                      <button className="view-mentor-btn">View Mentor</button>
                    </span>
                  </div>
                </div>
                <div className="mentors-personal-card">
                  <img
                    src="/public/mentors3.svg"
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
                    <p>
                      <b>32</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Assigned Jobs</p>
                    <p>
                      <b>63</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Monthly Progress</p>
                    <p>
                      <b>19%</b>
                    </p>
                  </div>
                  <div className="aside-card">
                    <p>Tokens Reserved</p>
                    <p>
                      <b>35,125.00</b>
                    </p>
                  </div>
                </div>
                <div className="navigation-btns">
                  <button>
                    <img src="/public/left.png" alt="" />
                  </button>
                  <button>
                    <img src="/public/right.png" alt="" />
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
