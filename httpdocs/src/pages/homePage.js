import React from 'react';
import Navigation from '../components/navigationBar';

function HomePage() {
  const scrumUser = JSON.parse(localStorage.getItem('scrumUser'));

  const username = scrumUser?.username;

  return (
    <div>
      <Navigation />
      <h2>Welcome to Home Page</h2>

      <h2>Welcome to Home Page {username[0]}</h2>
      {/* Add authenticated user content here */}
    </div>
  );
}

export default HomePage;
