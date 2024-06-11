import React, { useState, useEffect } from 'react';
import AlbumItem from './AlbumItem';
import PlaylistItem from './PlaylistItem';
import Slider from './Slider';
import Player from './Player';

const MainSection = ({ searchQuery, updateSearchResults }) => {
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [charts, setCharts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then(data => {
        setAlbums(data.new_albums);
        setPlaylists(data.featured_playlists);
        setCharts(data.charts);
        setFilteredItems([...data.new_albums, ...data.featured_playlists]);
      });

    const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(savedSearches);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const result = filteredItems.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.listname?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(result);
      updateSearchResults(result);

      // Save recent searches
      const updatedSearches = [searchQuery, ...recentSearches.filter(search => search !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } else {
      setSearchResults([]);
      setFilteredItems([...albums, ...playlists]);
      updateSearchResults([]);
    }
  }, [searchQuery, albums, playlists, recentSearches, filteredItems, updateSearchResults]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px]">
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Search Results</h2>
        <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((item) => (
            <PlaylistItem key={item.listid || item.albumid} playlist={item} />
          ))}
        </div>
      </section>
      
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
        <Slider data={playlists} type={'playlists'} />
      </section>
      
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Songs</h2>
        <Slider data={albums} type={'albums'} />
      </section>

      <Player />
    </div>
  );
};

export default MainSection;









///////////org code

// import React, { useState, useEffect } from 'react';
// import AlbumItem from './AlbumItem';
// import PlaylistItem from './PlaylistItem';
// import Slider from './Slider';

// const MainSection = ({ searchQuery }) => {
//   const [albums, setAlbums] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [charts, setCharts] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [recentSearches, setRecentSearches] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then(data => {
//         setAlbums(data.new_albums);
//         setPlaylists(data.featured_playlists);
//         setCharts(data.charts);
//         setFilteredItems([...data.new_albums, ...data.featured_playlists]);
//       });

//     const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
//     setRecentSearches(savedSearches);
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       const result = filteredItems.filter((item) =>
//         item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.listname?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setSearchResults(result);

//       // Save recent searches
//       const updatedSearches = [searchQuery, ...recentSearches.filter(search => search !== searchQuery)].slice(0, 5);
//       setRecentSearches(updatedSearches);
//       localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
//     } else {
//       setSearchResults([]);
//       setFilteredItems([...albums, ...playlists]);
//     }
//   }, [searchQuery, albums, playlists, recentSearches]);

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px]">
//       <section className='my-1'>
//         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Search Results</h2>
//         <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {searchResults.map((item) => (
//             <PlaylistItem key={item.listid} playlist={item} />
//           ))}
//         </div>
//       </section>
      
//       <section className='my-1'>
//         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
//         <Slider data={playlists} type={'playlists'} />
//       </section>
      
//       <section className='my-1'>
//         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Songs</h2>
//         <Slider data={albums} type={'albums'} />
//       </section>

//       {/* {searchQuery && (
//         <section className='my-1'>
//           <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Search Results</h2>
//           <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {searchResults.map((item) => (
//               item.title ? (
//                 <AlbumItem key={item.albumid} album={item} />
//               ) : (
//                 <PlaylistItem key={item.listid} playlist={item} />
//               )
//             ))}
//           </div>
//         </section>
//       )} */}

//     </div>
//   );
// };

// export default MainSection;


