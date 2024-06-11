import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import MainSection from '../components/MainSection';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      <div className="flex-grow">
        <MainSection searchQuery={searchQuery} />
      </div>
      <Player />
    </div>
  );
};

export default Home;




/////////////////// org code

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Player from '../components/Player';
// import MainSection from '../components/MainSection';

// const Home = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow">
//         <MainSection />
//       </div>
//       <Player />
//     </div>
//   );
// };

// export default Home;




