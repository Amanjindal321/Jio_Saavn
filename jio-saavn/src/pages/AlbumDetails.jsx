
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

import axios from 'axios';

const AlbumDetails = (details) => {
  const { id } = useParams(); // Get the albumid from the URL
   
  const getAlbumDetails = async() => {
    const res= await axios.get(`/albums/${details.albumid}`);
    const {data} = await res.data;
    console.log(data);
  };

  useEffect(() => {
    getAlbumDetails();
  }, []);
  return (
    <>
    {/* <Navbar /> */}
    
      <div>
        Details for ID: {id}
      </div>
   
    {/* <Player /> */}
    </>
  );
};

export default AlbumDetails;






