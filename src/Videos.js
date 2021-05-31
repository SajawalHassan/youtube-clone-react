import React from 'react'
import './Videos.css'

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
    return (
        <div className = "videos">
            <div className="videos-card">
                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/gzALIXcY4pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/WewP6avETaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/IPJr-ssJ3as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/LIBsKhpeFKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/BMSycoqEr4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/Vl3swga-Xrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/ZjQJBGxwwF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="210" src="https://www.youtube.com/embed/DTvS9lvRxZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="border"></div>

            <div className="videos-card">
                <div className="video">
                <iframe width="300" height="210" src="https://www.youtube.com/embed/qGLB16M1BrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="300" height="210" src="https://www.youtube.com/embed/wGFSFv2qH1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="300" height="210" src="https://www.youtube.com/embed/lCvs7qrsW9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="300" height="210" src="https://www.youtube.com/embed/wjMrT39gZZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="border"></div>

            <div className="videos-card">
                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/geN6AnmTCdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/TN8UXlooWGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/Xxa0g0YqjWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/93s1JECSy60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/93s1JECSy60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/Pn57dz6bR2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/_fqjDAR6MNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/J5jGb1KsYmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="border"></div>

        </div>
    )
}

export default VideoCard
