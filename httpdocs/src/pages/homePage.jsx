import React from 'react';
import Navigation from '../components/navigationBar';
import Carousel from '../components/carousel';
import Content from '../components/content';

function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden'>
      <Navigation />
      
      <div>
        
      </div>

      <div className=''>
        <Carousel />
        <Content />
      </div>
    </div>
  );
}

export default HomePage;
