import React from 'react'
import '../Sidebar/Sidebar.css'
import home from '../../assets/home.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import game_icon from  '../../assets/game_icon.png'


const Sidebar = ({sidebar,Catagory,SetCatagory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${Catagory === 0?'active':""}`} onClick={()=>SetCatagory(0)}  >
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className={`side-link ${Catagory === 20?'active':""}`}onClick={()=>SetCatagory(20)}  >
          <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`side-link ${Catagory === 2?'active':""}`} onClick={()=>SetCatagory(2)}  >
          <img src={automobiles} alt="" /><p>Automobile</p>
        </div>
        <div className={`side-link ${Catagory === 17?'active':""}`} onClick={()=>SetCatagory(17)}  >
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`side-link ${Catagory === 24?'active':""}`} onClick={()=>SetCatagory(24)}  >
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className={`side-link ${Catagory === 28?'active':""}`} onClick={()=>SetCatagory(28)}  >
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className={`side-link ${Catagory === 10?'active':""}`} onClick={()=>SetCatagory(10)}  >
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`side-link ${Catagory === 22?'active':""}`} onClick={()=>SetCatagory(22)}  >
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side-link ${Catagory === 25?'active':""}`} onClick={()=>SetCatagory(25)}  >
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link" >
          <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /><p>Mr Beast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /><p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /><p>Nasdaily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar