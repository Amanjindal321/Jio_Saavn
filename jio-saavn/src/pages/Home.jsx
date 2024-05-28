

import React from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import MainSection from '../components/MainSection';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <MainSection />
      </div>
      <Player />
    </div>
  );
};

export default Home;
