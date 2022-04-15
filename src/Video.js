import React, { useRef, useState } from 'react';

import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

import './Video.css';

function Video({url, channel, description, song, likes, messages, shares}) {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(true);
        }
        else{
            videoRef.current.play();
            setPlaying(false);
        }
    }

    return (
    <div className='video'>
        <video
            className='video_player' 
            loop
            ref={videoRef}
            src={url}
            onClick={handleVideoPress}>
        </video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
    )
}

export default Video 