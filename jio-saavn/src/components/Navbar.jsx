

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
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
          onClick={handleInputChange} 
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
        <div className='flex text-[15px] gap-5 text-gray-600 font-semibold'>
          <li className='list-none'>Log In</li>
          <li className='list-none'>Sign In</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// // // Navbar.js
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { MdKeyboardArrowDown } from 'react-icons/md';

// // const Navbar = ({ onSearch }) => {
// //   const [query, setQuery] = useState('');
// //   const [recentSearches, setRecentSearches] = useState([]);

// //   useEffect(() => {
// //     const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
// //     setRecentSearches(savedSearches);
// //   }, []);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (query.trim() === '') return;

// //     onSearch(query);

// //     const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
// //     if (!recentSearches.includes(query)) {
// //       recentSearches.push(query);
// //       localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
// //       setRecentSearches(recentSearches);
// //     }
// //   };

// //   return (
// //     <nav className="flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20">
// //       <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0 ">
// //         <div className="flex justify-between items-center gap-2 mr-8">
// //           <img src="/savan-logo.png" alt="logo" width={37} />
// //           <Link to="/" className="font-extrabold text-lg">
// //             Jio Saavn
// //           </Link>
// //         </div>
// //         <div className="flex text-[24px] lg:text-[15px] gap-6 text-gray-600 font-semibold h-full">
// //           <li className="list-none">Music</li>
// //           <li className="list-none">Podcast</li>
// //           <li className="list-none">Go Pro</li>
// //         </div>
// //       </div>

// //       <div className="hidden lg:block">
// //         <form onSubmit={handleSearch} className="flex">
// //           <input
// //             type="text"
// //             name="search"
// //             id="search"
// //             className="py-2 rounded-full w-[35vw] outline-black text-center border text-black"
// //             placeholder="Search for songs..."
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //           />
// //           <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full ml-2">
// //             Search
// //           </button>
// //         </form>
// //       </div>

// //       <div className="hidden lg:flex items-center gap-8">
// //         <div className="flex items-center gap-1">
// //           <div className="flex flex-col text-sm">
// //             <span className="text-[14px] text-gray-500 font-semibold">Music Language</span>
// //             <span className="text-[14px] text-gray-500 font-semibold">Hindi</span>
// //           </div>
// //           <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
// //         </div>
// //         <div className="flex text-[15px] gap-5 text-gray-600 font-semibold">
// //           <li className="list-none">Log In</li>
// //           <li className="list-none">Sign In</li>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';

// const Navbar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       onSearch(searchTerm);
//       setSearchTerm('');
//     }
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
//           <li className='list-name'>Go Pro</li>
//         </div>
//       </div>

//       {/* 2nd div */}
//       <div className='hidden lg:block'>
//         <input
//           type="text"
//           name='search'
//           id='search'
//           value={searchTerm}
//           onChange={handleInputChange}
//           onKeyDown={handleSearch}
//           className='py-2 rounded-full w-[35vw] outline-black text-center border text-black'
//           placeholder='Search for songs...'
//         />
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
//         <div className='flex text-[15px] gap-5 text-gray-600 font-seemibold'>
//           <li className='list-none'>Log In</li>
//           <li className='list-none'>Sign In</li>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




///////////////////////////////////////////////////////////code////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';



// const Navbar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = () => {
//     if (searchTerm) {
//       onSearch(searchTerm);
//       setSearchTerm('');
//     }
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
//           onClick={handleSearch} 
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
