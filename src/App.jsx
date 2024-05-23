import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Video from '../src/Pages/Video/Video'
const App = () => {
const [sidebar,setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}></Route>
        <Route path='/video/:catagoryId/:videoId' element={<Video/>}></Route>
      </Routes>
    </div>
  )
}

export default App