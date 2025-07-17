import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return <nav className="header">
        <div className="mentor-token-logo">
            <a href=""><img src="/Group8626.svg" alt="Mentor Token" /></a>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className="login-signup-btns">
            <a href="" className="login-btn">Login</a>
            <button className="signup-btn"> ➔ Get Started</button>
        </div>
    </nav>
}

export default Header