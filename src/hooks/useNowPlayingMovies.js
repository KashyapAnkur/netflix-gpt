import { API_OPTIONS, TMDB_NOW_PLAYING } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
    const { nowPlayingMovies } = useSelector(store => store.movies)

    const getNowPlayingMovies = async() => {
        const data = await fetch(TMDB_NOW_PLAYING, API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    
    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;