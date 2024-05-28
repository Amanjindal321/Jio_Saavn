import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ song }) => {
  return (
    <Link
      to={`/albums/${song.albumsid}`}
      className="w-[160px] max-h-[450px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg m-2"
    >
      <img src={song.image} alt={song.title} className="rounded-lg" />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="text-gray-600 font-semibold overflow-x-clip">{song.title}</span>
        <p className="text-gray-500 font-thin">{song.Artist.music.map(artist => artist.name).join(', ')}</p>
      </div>
    </Link>
  );
};

export default AlbumItem;






