import { Link, Outlet, useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <span>
    <button onClick={handleLogout} style={{background: "none", color:"#a4a5f8", cursor: "pointer", border: "none" }}>
      <img src="/public/logout.png" alt="" />
        Logout
    </button>
    </span>
    
  );
}

export default Logout;