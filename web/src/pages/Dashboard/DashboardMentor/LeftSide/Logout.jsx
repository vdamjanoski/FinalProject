import { Link, Outlet, useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };
  return (
    <span>
    <button onClick={handleLogout} style={{background: "none", color:"#a4a5f8", cursor: "pointer", border: "none" }}>
      <img src="/logout.png" alt="" />
        Logout
    </button>
    </span>
    
  );
}

export default Logout;