import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
import { useNavigate } from 'react-router-dom';
import './login.scss';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isAuthErorr } = useAuth();
  const handleLogin = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const handleRegisterNavigate = () => {
    navigate('/register');
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="container" onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button type="submit" className="btn">
          Login
        </button>
        {isAuthErorr && <p>Error, try again</p>}
        <button className="btn" onClick={handleRegisterNavigate}>
          Go to register!
        </button>
      </form>
    </div>
  );
}
