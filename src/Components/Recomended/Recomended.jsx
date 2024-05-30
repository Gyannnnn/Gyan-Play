import React, { useEffect, useState } from 'react';
import './Recomended.css';
import { API_KEY } from '../../Data';
import { Link } from 'react-router-dom';

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=55&regionCode=IN&key=${API_KEY}`;
      const response = await fetch(videoUrl);
      const data = await response.json();
      setApiData(data.items);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error loading recommended videos: {error.message}</div>;
  }

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <div  to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{item.statistics.viewCount} views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recomended;



//COMPLETED
