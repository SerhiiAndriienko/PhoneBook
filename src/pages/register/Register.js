import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuthErorr } = useAuth();
  const handleLogin = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
  };
  const handleLoginNavigate = () => {
    navigate('/login');
  };
  return (
    <div style={{ margin: 50 }}>
      <h2>Register</h2>
      <form className="container" onSubmit={handleLogin}>
        <input
          type="name"
          placeholder="Enter your name"
          onChange={event => {
            setName(event.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        {password && <div style={{ width: 150 }}></div>}
        <button className="btn" type="submit">
          Register
        </button>
        {isAuthErorr && <p style={{ color: 'red' }}>Error, try again</p>}
        <button className="btn" onClick={handleLoginNavigate}>
          Go to login!
        </button>
      </form>
    </div>
  );
}
