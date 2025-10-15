import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [accountType, setAccountType] = useState("");
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [representative, setRepresentative] = useState("");
  const [address, setAddress] = useState("");
  const [inviteEmails, setInviteEmails] = useState("")
   const navigate = useNavigate();

 const handleSend = async (e) => {
  e.preventDefault();
  setError("");

 const payload = {
    email,
    password,
    role: accountType,
    name,
    address,
    ...(accountType === "mentor"
      ? { phone, skills: skills.split(",").map(s => s.trim()) }
      : { representative })
  };

  try {
    const res = await fetch("http://localhost:10000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.status === 201 || data.message === "New user created") {
      navigate("/login");
    } else {
      setError(data.message || "Error creating new user!");
    }
  } catch (err) {
    console.error(err);
    setError("Server error!");
  }
};

  return (
    <div className="signup">
      <div className="left-side">
        <div className="left-side-text">
          <h1>
            GROW <br /> YOUR <br /> STARTUP!
          </h1>
          <p>MONITORING AND EVALUATING NOW IS EASY!</p>
        </div>
        <div className="left-side-mentor-token">
          <div className="mentor-token-flex">
            <img src="Vector.png" alt="" />
            <span>Mentor Token</span>
          </div>
          <p>mentortoken.com</p>
        </div>
      </div>
      <div className="rocket-img">
        <img src="vetary-rocket.svg" alt="" />
      </div>
      {step === 1 && (
        <div className="right-side">
          <div className="mentor-logo-title">
            <img src="vector-blue.png" alt="" />
          </div>
          <div className="paragraph-above-form">
            <h3>CHOOSE ACCOUNT TYPE</h3>
          </div>
          <div className="account-type-toggle">
            <button type="button" value="startup" className={accountType === "startup" ? "active" : ""}
              onClick={() => {
                setAccountType("startup");
              }}
              placeholder="Startup"
            > Startup
              </button>

            <button type="button" value="mentor"
              className={accountType === "mentor" ? "active" : ""}
              onClick={() => {
                setAccountType("mentor");
              }}
            > Mentor </button>
          </div>
          <form className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ul className="password-rules">
              <li>Password Strength: Weak</li>
              <li>Cannot contain your name or email address</li>
              <li>At least 8 characters</li>
              <li>Containing a number or symbol</li>
            </ul>
            <button
              type="button"
              className="continue-btn"
              onClick={() => {
                setStep(2);
              }}
            >
              Continue
            </button>
          </form>
          <p className="login-link">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>
      )}
      {step === 2 && accountType === "mentor" && (
        <form onSubmit={handleSend} className="mentor-signup-form" method="POST">
            <div>
              <div className="mentor-logo-title">
                <img src="vector-blue.png" alt="" />
              </div>
              <div className="paragraph-above-form">
                <h3>SETUP MENTOR ACCOUNT</h3>
              </div>
              <div className="right-side-inputs">
                 <input
                type="text"
                name="name"
                placeholder="Name and surname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
              <button className="register-btn" type="submit">Register</button>
              </div>
            </div>
        </form>
          )}
          {step === 2 && accountType === "startup" && (
              <form onSubmit={handleSend} className="mentor-signup-form" method="POST">
            <div>
              <div className="mentor-logo-title">
                <img src="vector-blue.png" alt="" />
              </div>
              <div className="paragraph-above-form">
                <h3>SETUP STARTUP ACCOUNT</h3>
              </div>
              <div className="right-side-inputs">
                 <input
                type="text"
                name="name"
                placeholder="My Startup Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                name="representative"
                placeholder="Legal Representative"
                value={representative}
                onChange={(e) => setRepresentative(e.target.value)}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Registered Business Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email address to invite mentor"
                value={inviteEmails}
                onChange={(e) => setInviteEmails(e.target.value)}
                required
              />
              <button className="register-btn" type="submit">Register</button>
              </div>
            </div>
        </form>
          )}
    </div>
  );
}