import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    // Example: if login successful, store user in localStorage
    localStorage.setItem('scrumUser', JSON.stringify({ username }));
    
    navigate('/home');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
