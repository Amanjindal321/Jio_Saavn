import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
import ChartItem from './components/ChartItem'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/albums/:id' element={<AlbumDetails />} />
        <Route path='/playlists/:id' element={<AlbumDetails />} />
        <Route path='/chart/:id' element={<ChartItem />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App;