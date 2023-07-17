import { useAuth } from 'hooks';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operation';
import './Header.scss';
export default function Header() {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useAuth();
  const handleLogOut = () => {
    dispatch(logout());
  };
  const handleActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(5, 81, 247)' : '',
      marginRight: 20,
      textDecoration: isActive && 'underline',
    };
  };

  return (
    <header>
      <div className="flexContainer">
        <nav>
          <NavLink to="/" style={handleActiveStyle}>
            Home
          </NavLink>
          <NavLink to="/contacts" style={handleActiveStyle}>
            Contacts
          </NavLink>
        </nav>
        <div className="login">
          {name ? (
            <div style={{ color: 'black' }}>
              Hello, {name}
              <button
                style={{ width: '80px', marginTop: 0 }}
                onClick={handleLogOut}
                className="btn"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <NavLink to={`/login`} style={handleActiveStyle}>
                Login
              </NavLink>
              <NavLink to={`/register`} style={handleActiveStyle}>
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </header>
  );
}
