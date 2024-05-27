import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Feed/Feed.css';
import { API_KEY } from '../../Data';
import {valuechanger} from '../../Data'
import moment from 'moment';

const Feed = ({ Catagory }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20000&regionCode=IN&videoCategoryId=${Catagory}&key=${API_KEY}`;
    try {
      const response = await fetch(videoURL);
      const result = await response.json();
      setData(result.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


 

  useEffect(() => {
    fetchData();
  }, [Catagory]);

  return (
    <div className="feed">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link to={`video/${item.snippet.catagoryId}/${item.id}`} className='card' key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valuechanger(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
          </Link>
        ))
      ) : (
        <p  id='loader'>Loading videos...</p>
      )}
    </div>
  );
};

export default Feed;
