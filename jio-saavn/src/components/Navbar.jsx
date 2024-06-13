import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = ({ onSearch, searchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);  /////////
  const navigate = useNavigate();

////////////////////
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    setLoggedInUser(user);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchButtonClick = () => {
    if (searchResults.length === 1) {
      const item = searchResults[0];
      if (item.albumid) {
        navigate(`/albums/${item.albumid}`);
      } else if (item.listid) {
        navigate(`/playlists/${item.listid}`);
      }
    } else {
      alert('No exact match found or multiple matches found');
    }
  };

/////////////
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    navigate('/');
  };

  return (
    <nav className='flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20'>
      {/* 1st div */}
      <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0 '>
        <div className='flex justify-between items-center gap-2 mr-8'>
          <img src='/savan-logo.png' alt='logo' width={37} />
          <Link to="/" className="font-extrabold text-lg">
            Jio Saavn
          </Link>
        </div>
        <div className='flex text-[24px] lg:text-[15px] gap-6 text-gray-600 font-semibold h-full'>
          <li className='list-none'>Music</li>
          <li className='list-none'>Podcast</li>
          <li className='list-none'>Go Pro</li>
        </div>
      </div>

      {/* 2nd div */}
      <div className='hidden lg:flex items-center gap-2'>
        <input
          type="text"
          name='search'
          id='search'
          value={searchTerm}
          onChange={handleInputChange}
          className='py-2 rounded-full w-[35vw] outline-black text-center border text-black'
          placeholder='Search for songs...'
        />
        <button
          onClick={handleSearchButtonClick}
          className='py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600'
        >
          Search
        </button>
      </div>
      
      {/* 3rd div */}
      <div className='hidden lg:flex items-center gap-8'>
        <div className='flex items-center gap-1'>
          <div className='flex flex-col text-sm'>
            <span className='text-[14px] text-gray-500 font-semibold'>Music Language</span>
            <span className='text-[14px] text-gray-500 font-semibold'>Hindi</span>
          </div>
          <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2' />
        </div>
        {loggedInUser ? (
          <div className='flex text-[15px] gap-5 text-gray-600 font-semibold'>
            <span>Welcome, {loggedInUser.name}</span>
            <button onClick={handleLogout} className='text-red-600'>Logout</button>
          </div>
        ) : (
        <div className='flex text-[15px] gap-5 text-gray-600 font-semibold'>
          {/* <li className='list-none'>Log In</li>
          <li className='list-none'>Sign In</li> */}
          <Link to='/login'>Log In</Link>
          <Link to='/register'>Sign In</Link>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;







//////////////org code

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';

// const Navbar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     onSearch(value);
//   };

//   return (
//     <nav className='flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20'>
//       {/* 1st div */}
//       <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0 '>
//         <div className='flex justify-between items-center gap-2 mr-8'>
//           <img src='/savan-logo.png' alt='logo' width={37} />
//           <Link to="/" className="font-extrabold text-lg">
//             Jio Saavn
//           </Link>
//         </div>
//         <div className='flex text-[24px] lg:text-[15px] gap-6 text-gray-600 font-semibold h-full'>
//           <li className='list-none'>Music</li>
//           <li className='list-none'>Podcast</li>
//           <li className='list-none'>Go Pro</li>
//         </div>
//       </div>

//       {/* 2nd div */}
//       <div className='hidden lg:flex items-center gap-2'>
//         <input
//           type="text"
//           name='search'
//           id='search'
//           value={searchTerm}
//           onChange={handleInputChange}
//           className='py-2 rounded-full w-[35vw] outline-black text-center border text-black'
//           placeholder='Search for songs...'
//         />
//         <button 
//           onClick={handleInputChange} 
//           className='py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600'
//         >
//           Search
//         </button>
//       </div>
      
//       {/* 3rd div */}
//       <div className='hidden lg:flex items-center gap-8'>
//         <div className='flex items-center gap-1'>
//           <div className='flex flex-col text-sm'>
//             <span className='text-[14px] text-gray-500 font-semibold'>Music Language</span>
//             <span className='text-[14px] text-gray-500 font-semibold'>Hindi</span>
//           </div>
//           <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2' />
//         </div>
//         <div className='flex text-[15px] gap-5 text-gray-600 font-semibold'>
//           <li className='list-none'>Log In</li>
//           <li className='list-none'>Sign In</li>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





