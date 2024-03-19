import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TMDB_TOP_RATED_MOVIES } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
        const data = await fetch(TMDB_TOP_RATED_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;