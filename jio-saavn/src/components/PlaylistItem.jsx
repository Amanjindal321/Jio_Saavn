import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ playlist }) => {
  return (
    <Link
      to={`/playlists/${playlist.listid}`} // Use listid in the path
      className="w-[160px] max-h-[240px] flex flex-col items-center gap-3 rounded-lg m-2"
    >
      <div className='w-full h-[160px] overflow-hidden'>
        <img src={playlist.image} alt={playlist.listname} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-full flex justify-start items-center text-center overflow-hidden">
        <span className="text-gray-600 font-semibold text-sm truncate ">{playlist.listname}</span>
      </div>
    </Link>
  );
};

export default PlaylistItem;
