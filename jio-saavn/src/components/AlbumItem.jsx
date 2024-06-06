import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ song }) => {
  const handleClick = () => {
    alert(`This album song is not available : ${song.title} , visit on Featured playlist for songs (Scroll down)`);
  };
  return (
    <Link
      // to={`/albums/${song.albumid}`}
      className="w-[160px] max-h-[240px] flex flex-col items-center gap-3 rounded-lg m-2 overflow-hidden"
      onClick={handleClick}
    >
      <div className='w-full h-[160px] overflow-hidden'>
      <img src={song.image} alt={song.title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="w-full flex  justify-start items-center text-center overflow-hidden">
        <span className="text-gray-600 font-semibold text-sm truncate ">{song.title}</span>
        {/* <p className="text-gray-500 font-thin truncate">{song.Artist.music.map(artist => artist.name).join(', ')}</p> */}
      </div>
    </Link>
    
  );
};

export default AlbumItem;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const AlbumItem = ({ song }) => {
//   return (
//     <Link
//       to={`/albums/${song.albumsid}`}
//       className="w-[160px] max-h-[450px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg m-2"
//     >
//       <img src={song.image} alt={song.title} className="rounded-lg" />
//       <div className="text-[13px] w-full flex flex-col justify-center items-center">
//         <span className="text-gray-600 font-semibold overflow-x-clip">{song.title}</span>
//         <p className="text-gray-500 font-thin">{song.Artist.music.map(artist => artist.name).join(', ')}</p>
//       </div>
//     </Link>
//   );
// };

// export default AlbumItem;




