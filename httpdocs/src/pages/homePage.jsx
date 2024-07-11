import React from 'react';
import Navigation from '../components/navigationBar';

function HomePage() {
  const scrumUser = JSON.parse(localStorage.getItem('scrumUser'));

  const username = scrumUser?.username;

  return (
    <div className='min-h-screen w-screen bg-slate-200'>
      <Navigation />
      
      <p></p>
    </div>
  );
}

export default HomePage;
