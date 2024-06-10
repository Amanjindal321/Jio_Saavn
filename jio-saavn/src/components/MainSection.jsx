
import React, { useState, useEffect } from 'react';
import AlbumItem from './AlbumItem';
import PlaylistItem from './PlaylistItem';
import Slider from './Slider';

const MainSection = ({ searchQuery }) => {
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

      // Save recent searches
      const updatedSearches = [searchQuery, ...recentSearches.filter(search => search !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } else {
      setSearchResults([]);
      setFilteredItems([...albums, ...playlists]);
    }
  }, [searchQuery, albums, playlists, recentSearches]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px]">
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Search Results</h2>
        <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((item) => (
            <PlaylistItem key={item.listid} playlist={item} />
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

      {/* {searchQuery && (
        <section className='my-1'>
          <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Search Results</h2>
          <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((item) => (
              item.title ? (
                <AlbumItem key={item.albumid} album={item} />
              ) : (
                <PlaylistItem key={item.listid} playlist={item} />
              )
            ))}
          </div>
        </section>
      )} */}

    </div>
  );
};

export default MainSection;







// // // import React, { useState, useEffect } from 'react';
// // // import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
// // // import AlbumItem from './AlbumItem';
// // // import PlaylistItem from './PlaylistItem';
// // // import ChartItem from './ChartItem';
// // // import Slider from './Slider';
// // // // import SearchBar from './SearchBar';

// // // const MainSection = () => {
// // //   const [albums, setAlbums] = useState([]);
// // //   const [playlists, setPlaylists] = useState([]);
// // //   const [charts, setCharts] = useState([]);
// // //   const [selectedChart, setSelectedChart] = useState(null);

// // //   const [filteredPlaylists, setFilteredPlaylists] = useState([]);
// // //   const [recentSearches, setRecentSearches] = useState([]);

// // //   useEffect(() => {
// // //     fetch('/data.json')
// // //       .then((response) => response.json())
// // //       .then(data => {
// // //         console.log("Fetched data: ", data);
// // //         setAlbums(data.new_albums);
// // //         setPlaylists(data.featured_playlists);
// // //         setCharts(data.charts); // Fetching charts data
// // //         setFilteredPlaylists(data.featured_playlists);
// // //       });
// // //   //     .catch(error => {
// // //   //       console.error("Error fetching data: ", error);
// // //   //     });
// // //   // }, []);


// // //   const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
// // //   setRecentSearches(savedSearches);
// // //   }, []);

// // //   const handleSearch = (query) => {
// // //     const result = playlists.filter((playlist) =>
// // //       playlist.listname.toLowerCase().includes(query.toLowerCase())
// // //     );
// // //     setFilteredPlaylists(result);
// // //   };


// // //   return (
// // //     <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-1 pb-[10px] ">
// // //       <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px]">
// // //       {/* <SearchBar playlists={playlists} onSearch={handleSearch} /> */}
// // //       {/* <section className='my-1'>
// // //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
// // //         <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //           {filteredPlaylists.map((playlist) => (
// // //             <PlaylistItem key={playlist.listid} playlist={playlist} />
// // //           ))}
// // //         </div>
// // //       </section> */}

// // //       {/* <section className='my-1'>
// // //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Recent Searches</h2>
// // //         <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //           {recentSearches.map((search, index) => (
// // //             <div key={index} className="flex items-center mt-1">
// // //               <span className="truncate">{search}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section> */}
// // //     </div>

// // //       <section className='my-1'>
// // //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Songs</h2>
// // //         <Slider data={albums} type={'albums'} />
// // //       </section>
// // //       <section className='my-1'>
// // //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
// // //         <Slider data={playlists} type={'playlists'} />
// // //       </section>
// // //       {/* <section>
// // //         <Slider data={charts} type={'chart'} />
// // //       </section> */}
// // //       <section className='my-1'>
// // //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Top Charts</h2>
// // //         <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //           {charts.map(chart => (
// // //             <div key={chart.listid} className="flex flex-col items-center cursor-pointer" onClick={() => handleChartClick(chart)}>
// // //               <img src={chart.image} alt={chart.listname} className="w-full h-48 object-cover rounded-lg" />
// // //               <h3 className="text-gray-600 font-semibold text-md mt-2">{chart.listname}</h3>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {selectedChart && (
// // //         <section className='my-1'>
// // //           <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>{selectedChart.listname} Songs</h2>
// // //           <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //             {selectedChart.songs.map(song => (
// // //               <div key={song.name} className="flex items-center mt-1">
// // //                 <img src={song.image} alt={song.name} className="w-8 h-8 object-cover rounded-full mr-2" />
// // //                 <span className="truncate">{song.name}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       )}


// // //     </div>
// // //   );
// // // };

// // // export default MainSection;





// // import React, { useState, useEffect } from 'react';
// // import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
// // import AlbumItem from './AlbumItem';
// // import PlaylistItem from './PlaylistItem';
// // import ChartItem from './ChartItem';
// // import Slider from './Slider';

// // const MainSection = () => {
// //   const [albums, setAlbums] = useState([]);
// //   const [playlists, setPlaylists] = useState([]);
// //   const [charts, setCharts] = useState([]);
// //   const [selectedChart, setSelectedChart] = useState(null);

// //   useEffect(() => {
// //     fetch('/data.json')
// //       .then((response) => response.json())
// //       .then(data => {
// //         console.log("Fetched data: ", data);
// //         setAlbums(data.new_albums);
// //         setPlaylists(data.featured_playlists);
// //         setCharts(data.charts); // Fetching charts data
// //       })
// //       .catch(error => {
// //         console.error("Error fetching data: ", error);
// //       });
// //   }, []);


// //   const handleChartClick = (chart) => {
// //     console.log("Chart clicked: ", chart);
// //     setSelectedChart(chart);
// //   };


// //   return (
// //     <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px] ">
// //       <section className='my-1'>
// //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Songs</h2>
// //         <Slider data={albums} type={'albums'} />
// //       </section>
// //       <section className='my-1'>
// //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
// //         <Slider data={playlists} type={'playlists'} />
// //       </section>
// //       {/* <section>
// //         <Slider data={charts} type={'chart'} />
// //       </section> */}
// //       <section className='my-1'>
// //         <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Top Charts</h2>
// //         <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {charts.map(chart => (
// //             <div key={chart.listid} className="flex flex-col items-center cursor-pointer" onClick={() => handleChartClick(chart)}>
// //               <img src={chart.image} alt={chart.listname} className="w-full h-48 object-cover rounded-lg" />
// //               <h3 className="text-gray-600 font-semibold text-md mt-2">{chart.listname}</h3>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {selectedChart && (
// //         <section className='my-1'>
// //           <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>{selectedChart.listname} Songs</h2>
// //           <div className="w-full lg:w-[78vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //             {selectedChart.songs.map(song => (
// //               <div key={song.name} className="flex items-center mt-1">
// //                 <img src={song.image} alt={song.name} className="w-8 h-8 object-cover rounded-full mr-2" />
// //                 <span className="truncate">{song.name}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}
// //     </div>
// //   );
// // };

// // export default MainSection;


