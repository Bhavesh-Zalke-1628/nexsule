import React from 'react'
import video from '../assets/video.mp4'
function VideoComponent() {
    return (
        <div className=' w-full h-[90vh] flex items-center justify-center '>
            <video className=' w-[60vw] object-cover' src={video} controls></video>
            {/* kdfh */}
        </div>
    )
}

export default VideoComponent
