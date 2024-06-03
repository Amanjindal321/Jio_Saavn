


import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import AlbumItem from './AlbumItem';
import Slider from './Slider';



const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then(data => {
        setAlbums(data.new_albums);
        setPlaylists(data.featured_playlists);
        setCharts(data.charts);
      });
  }, []);

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? albums.length - 1 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === albums.length - 1 ? 0 : prevIndex + 1));
  // };

  // if (albums.length === 0) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden mt-20 pb-[100px] ">
      {/* <button
        onClick={handlePrevClick}
        className="absolute left-0 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
      >
        <MdKeyboardArrowLeft size={20} />
      </button> */}
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Trending Songs</h2>
      <Slider data={albums} type={'albums'}/>
      </section>
      <section className='my-1'>
        <h2 className='text-xl px-5 py-3 font-semibold text-gray-700 w-full lg:w-[78vw] mx-auto'>Featured Playlists</h2>
      <Slider data={playlists} type={'playlists'}/>
      </section>
      {/* <div className="grid grid-rows-2 grid-flow-col-dense ">
        {albums.slice(currentIndex, currentIndex + 14).map((album, index) => (
          <div key={album.albumid} className="m-2">
            <AlbumItem song={album} />
          </div>
        ))}
      </div> */}
      {/* <button
        onClick={handleNextClick}
        className="absolute right-0 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
      >
        <MdKeyboardArrowRight size={20} />
      </button> */}


    </div>
  );
};

export default MainSection;

//flex w-full transition-transform duration-300 ease-in-out"