import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TMDB_POPULAR_MOVIES } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async() => {
        const data = await fetch(TMDB_POPULAR_MOVIES, API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;