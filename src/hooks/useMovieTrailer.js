import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const { trailerVideo } = useSelector(store => store.movies);

    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, API_OPTIONS);
        const json = await data.json();
        const filteredData = json?.results?.filter((movie) => {
            if(movie.type === "trailer") {
                return movie;
            }
        });
        const trailer = filteredData?.length ? filteredData?.[0] : json?.results?.[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        if(!trailerVideo) getMovieVideos();
    }, []);
};

export default useMovieTrailer;