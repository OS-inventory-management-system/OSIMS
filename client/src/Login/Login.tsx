import { useState } from 'react';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your actual login logic
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className='login-container'>
      <form className='login-card' onSubmit={handleSubmit}>
        <h2>OSIMS</h2>
        <p className='subtitle'>Sign in to your account</p>
        <label>
          Username
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </label>
        <label>
          Password
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
