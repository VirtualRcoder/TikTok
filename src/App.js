import axios from './axios';
import { useEffect } from 'react';
import './App.css';
import Video from './Video';
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    async function fetchPosts(){
      const response = await axios.get('https://tiktobackend.herokuapp.com/v2/posts')
      setVideos(response.data)
      return response
    }
    fetchPosts()
  },[])

  return (
    <div className="app">
      <h1>TIKTOK</h1>
      <div className='app_videos'>
        {
        videos.map((video)=>{
          return <Video
          url= {video.url}
          channel= {video.channel} 
          description= {video.description} 
          song= {video.song}
          likes= {video.likes} 
          messages= {video.messages} 
          shares= {video.shares}
          />
        })}
      </div>
      
    </div>
  );
}

export default App;
