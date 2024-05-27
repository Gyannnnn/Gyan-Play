import React, { useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import hero from '../../assets/hero.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = ({videoId}) => {

  useEffect(()=>{
    console.log("Videopage Is realoading !!!!");
  })

  return (
    <div className="play-video">
      {/* <video src={video1} controls muted autoPlay></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className="play-video-info">
        <p>150 M viwes &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />130M</span>
          <span><img src={dislike} alt="" />1k</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />save</span>
        </div>
      </div>

      <hr />
      <div className="publisher">
        <div>
          <img src={hero} alt="" />
          <div>
            <p>Gyan Play</p>
            <span>14M Subscriber</span>
          </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequatur?</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Gyanranjan Patra</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244k</span>
              <img src={dislike} alt="" />
              <span>1k</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlayVideo