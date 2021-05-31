import React from 'react'

import './RecommendedVideos.css'
import VideoCard from './Videos'

function ReccomendedVideos() {
    return (
        <div className = "recommendedvideos">
            <h1>Recommended</h1>
            <div className="recommendedVideos__Videos">
                <VideoCard />
            </div>
        </div>
    )
}

export default ReccomendedVideos
