import React from 'react'
import '../Video/Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recomended/Recomended'

const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo/>
      <Recomended/>
    </div>
  )
}

export default Video