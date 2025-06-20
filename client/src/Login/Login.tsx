import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store token if your backend returns one
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid username or password');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login-container'>
      <form className='login-card' onSubmit={handleSubmit}>
        <h2>OSIMS</h2>
        <p className='subtitle'>Sign in to your account</p>
        {error && <p className='error-message'>{error}</p>}
        <label>
          Username
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
            disabled={isLoading}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}
