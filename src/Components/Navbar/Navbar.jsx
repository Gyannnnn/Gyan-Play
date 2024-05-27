import React from 'react'
import '../Navbar/Navbar.css'
import search_icon from '../../assets/search.png'
import menu_icon from '../../assets/menu.png'
import herologo from '../../assets/hero.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import hero from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div   className='nav-left flex-div'>
        <img id='menu-logo' src={menu_icon} onClick={()=>setSidebar(prev => prev === false ? true :false )}  alt="" />
        <Link to='/'><img  id='hero-logo'  src={herologo} alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div ">
          <input type="text" placeholder='search' />
          <img src={search_icon} alt="" />
        </div>

      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={hero} className='user-icon' alt="" />
      </div>

    </nav>
  )
}

export default Navbar