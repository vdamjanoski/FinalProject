import './Header.css'
import { Link, Navigate } from 'react-router-dom'

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
            <Link to="/login" className='login-btn'>Login</Link>
            <Link to="/signup">
                <button className="signup-btn"> ➔ Get Started</button>
            </Link>
        </div>
    </nav>
}

export default Header