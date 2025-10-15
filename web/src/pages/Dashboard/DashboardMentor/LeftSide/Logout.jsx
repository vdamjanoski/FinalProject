import { Link, Outlet, useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <button className='left-side-button' onClick={handleLogout}>
                Logout
              </button>
  );
}

export default Logout;