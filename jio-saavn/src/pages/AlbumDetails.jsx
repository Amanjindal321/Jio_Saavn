

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

const AlbumDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then(data => {
        const allItems = [...data.new_albums, ...data.featured_playlists]; // Combine both arrays
        const item = allItems.find(item => item.albumid === id || item.listid === id); // Find item by albumid or listid
        setDetails(item);
      });
  }, [id]);

  const openPermaUrl = () => {
    if (details && details.perma_url) {
      window.open(details.perma_url, '_blank');
    }
  };

  if (!details) return <div className='p-5'>Loading...</div>;

  return (
    <>
    <Navbar />
   <div className='p-28 mt-11 flex items-center justify-center bg-blue-200'>
     <img src={details.image} alt={details.title || details.listname} className="w-64 h-64 mr-8 rounded-lg shadow-lg" />
    <div>
      <h1 className='text-4xl font-bold mb-9'>Best of All Time</h1>
      {/* <h1 className="text-2xl font-bold mb-4">Details for ID: {id}</h1> */}
      <p><strong>  Count of Songs:</strong> {details.count}</p>
      <button 
        onClick={openPermaUrl}
        className="inline-block px-6 py-4 mt-3 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Click For Album Songs
      </button>
    </div>
   </div>
    <Player />
   </>
  );
};

export default AlbumDetails;





