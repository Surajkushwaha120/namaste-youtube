import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
   const [videos, setVideos] = useState([]);

useEffect(( ) => {
  getvideos();

},[])
const getvideos = async () => {

  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  setVideos(json.items);
}
  return (
    <div className='flex flex-wrap'>
     <AdVideoCard info={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=/"+ video.id}>
         <VideoCard key={video.id} info={video} />
         </Link>
 
  ))}
     
    </div>
  )
}

export default VideoContainer