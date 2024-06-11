import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AlbumDetails from './pages/AlbumDetails';
import ChartItem from './components/ChartItem';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <BrowserRouter>
      <Navbar onSearch={handleSearch} searchResults={searchResults} />
      <Routes>
        <Route path='/' element={<MainSection searchQuery={searchQuery} updateSearchResults={updateSearchResults} />} />
        <Route path='/albums/:id' element={<AlbumDetails />} />
        <Route path='/playlists/:id' element={<AlbumDetails />} />
        <Route path='/chart/:id' element={<ChartItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;







///////////////org code

// import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import AlbumDetails from './pages/AlbumDetails'
// import ChartItem from './components/ChartItem'


// const App = () => {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/albums/:id' element={<AlbumDetails />} />
//         <Route path='/playlists/:id' element={<AlbumDetails />} />
//         <Route path='/chart/:id' element={<ChartItem />} />
        
//       </Routes>
//     </BrowserRouter>

//   )
// }

// export default App;

