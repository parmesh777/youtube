import React from 'react'
import VideoItem from './VideoItem'

function VideoList(props) {
    const {videos, onVideoSelect}=props

  const Video=  videos.map((video)=>{
        return(
        <VideoItem 
        onVideoSelect={onVideoSelect} 
        video={video} 
        key={video.etag} />
        ) 
    })
    return (
        <div  className="ui relaxed divided list">
           {Video}
        </div>
    )
}

export default VideoList
