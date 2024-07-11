import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Perform login logic, e.g., validate credentials

    // Example: if login successful, store user in localStorage
    localStorage.setItem('scrumUser', JSON.stringify({ username }));
    
    // Redirect to home page
    navigate('/home'); // Use navigate instead of history.push
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
