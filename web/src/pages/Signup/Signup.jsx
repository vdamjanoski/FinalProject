import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [accountType, setAccountType] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    role: accountType,
    representative: "",
  });
   const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async (event) => {
    event.preventDefault();
    setError("");
    try{
      const res = await fetch(`http://localhost:10000/api/v1/signup`, {
        method: `POST`,
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify( formData  ),
      })
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.err || `Server error: ${res.status}`);
    }
    navigate("/");
  } catch (err) {
    console.log(err);
    setError("Server error: " + err.message);
  }
  }

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
            <input type="button" value={formData.role} className={accountType === "startup" ? "active" : ""}
              onClick={() => {
                setAccountType("startup");
              }}/> Startup

            <button
              className={accountType === "mentor" ? "active" : ""}
              onClick={() => {
                setAccountType("mentor");
              }}
            >
              Mentor
            </button>
          </div>
          <form className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <ul className="password-rules">
              <li>Password Strength: Weak</li>
              <li>Cannot contain your name or email address</li>
              <li>At least 8 characters</li>
              <li>Containing a number or symbol</li>
            </ul>
            <button
              type="submit"
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
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Adress"
                value={formData.address}
                onChange={handleChange}
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
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="representative"
                placeholder="Name and surname"
                value={formData.representative}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Registered Business Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email address to invite mentor"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button className="register-btn" type="submit" onClick={() => {console.log(accountType)}}>Register</button>
              </div>
            </div>
        </form>
          )}
    </div>
  );
}