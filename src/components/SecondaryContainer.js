import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    
    return (
        <div className="bg-black">
            <div className="pl-4 md:pl-16 mt-0 md:-mt-64 z-20 relative">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;