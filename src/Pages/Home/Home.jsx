import React, { useState } from 'react'
import '../Home/Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const Home = ({sidebar}) => {

  const[Catagory,SetCatagory]=useState(0)

  return (

    <>
    <Sidebar sidebar={sidebar} Catagory={Catagory} SetCatagory={SetCatagory} />
    <div className={`container ${sidebar?'':'large-container'}`}>
      <Feed Catagory={Catagory}  />
    </div>
    
    </>
  )
}

export default Home