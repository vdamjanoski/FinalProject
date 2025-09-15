import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      const res = await fetch(`http://localhost:10000/api/v1/login`, {
        method: `POST`,
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({email, password}),
      })
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem(`token`, data.token);
        navigate("/dashboard")
      } else {
        setError(res.data.error || "Грешка при најавување")
      }
    }catch(err){
      console.log(err);
      setError("Серверска грешка")
    }
  }

  return <div>
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
        <div className="right-side">
          <div className="mentor-logo-title">
            <img src="vector-blue.png" alt="" />
          </div>
          <div className="paragraph-above-form">
            <h3>LOG IN TO MENTOR TOKEN</h3>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="continue-btn"
            >
              Continue
            </button>
          </form>
          <p className="login-link">
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
  </div>
</div>
}

export default Login;