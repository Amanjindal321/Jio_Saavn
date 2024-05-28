


import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import AlbumItem from './AlbumItem';
import Slider from './Slider';


const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setAlbums(data.new_albums));
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
      <Slider data={albums} />
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