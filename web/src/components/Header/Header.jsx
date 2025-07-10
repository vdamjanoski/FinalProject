import './Header.css'

function Header() {
    return <nav className="header">
        <div className="mentor-token-logo">
            <a href=""><img src="/Group8626.svg" alt="Mentor Token" /></a>
        </div>
        <div className="links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className="login-signup-btns">
            <a href="" className="login-btn">Login</a>
            <button className="signup-btn"> ➔ Get Started</button>
        </div>
    </nav>
}

export default Header