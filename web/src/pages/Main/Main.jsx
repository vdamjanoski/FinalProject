import './Main.css';

function Main(){
    return <main>
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
}
 export default Main;