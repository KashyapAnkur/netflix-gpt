import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.trailerVideo)
    useMovieTrailer(movieId);
    return (
        <div className="">
            <iframe
                autoplay={1}
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/iM150ZWovZM?si=${trailerVideo?.key}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
        </div>
    )
}

export default VideoBackground;