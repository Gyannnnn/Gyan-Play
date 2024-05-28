import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, valuechanger } from '../../Data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoAndChannelData = async () => {
    try {
      const videodetailsURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const videoResponse = await fetch(videodetailsURL);
      const videoData = await videoResponse.json();

      if (videoData.items.length > 0) {
        setApiData(videoData.items[0]);
        const channelId = videoData.items[0].snippet.channelId;
        const channelURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
        const channelResponse = await fetch(channelURL);
        const channelData = await channelResponse.json();

        if (channelData.items.length > 0) {
          setChannelData(channelData.items[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching video or channel data: ", error);
    }
  };

  useEffect(() => {
    fetchVideoAndChannelData();
  }, [videoId]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : 'Loading...'}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? valuechanger(apiData.statistics.viewCount) : 'Loading...'} &bull;{' '}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'Loading...'}
        </p>
        <div>
          <span>
            <img src={like} alt="like" />
            {apiData ? valuechanger(apiData.statistics.likeCount) : 'Loading...'}
          </span>
          <span>
            <img src={dislike} alt="dislike" />1k
          </span>
          <span>
            <img src={share} alt="share" />Share
          </span>
          <span>
            <img src={save} alt="save" />Save
          </span>
        </div>
      </div>

      <hr />
      <div className="publisher">
        <div>
          <img src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt="Channel Thumbnail" />
          <div>
            <p>{channelData ? channelData.snippet.title : 'Loading...'}</p>
            <span>{channelData ? valuechanger(channelData.statistics.subscriberCount) : 'Loading...'}</span>
          </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description : 'Loading...'}</p>
        <hr />
        <h4>{apiData ? `${valuechanger(apiData.statistics.commentCount)} Comments` : 'Loading...'}</h4>
        {[...Array(10)].map((_, index) => (
          <div className="comment" key={index}>
            <img src={user_profile} alt="User Profile" />
            <div>
              <h3>Gyanranjan Patra</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut, minus et nulla aut dolore. Fugit maiores cupiditate vel ab!</p>
              <div className="comment-action">
                <img src={like} alt="like" />
                <span>244k</span>
                <img src={dislike} alt="dislike" />
                <span>1k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
