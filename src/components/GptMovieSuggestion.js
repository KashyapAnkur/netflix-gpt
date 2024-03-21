import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieNames, movieResults} = gpt;
  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-80">
      <div className="opacity-100">
        <h1>Results for:  </h1>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
      {movieNames}
    </div>
  )
}

export default GptMovieSuggestion;