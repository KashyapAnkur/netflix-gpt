import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchbar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    // Make a call to open ai and get movie results
    // const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value + ". Only give the names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Crackk, The Way of the Dragon, Fist of Fury";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo'
    // });
    // if(!gptResults.choices) {
    //   // show some error
    // }
    // console.log(gptResults?.choices?.[0]?.message?.content);
    // console.log(gptResults.choices);
    // const gptMovies = gptResults.choices?.[0]?.message?.content?.split(",");
    // const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // [Promise,Promise,Promise,Promise,Promise]

    // const tmdbResults = await Promise.all();
    const allMovies = searchText.current.value.split(",");
    const promiseArray = allMovies.map(movie => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieNames: allMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <input
              ref={searchText}
              type="text"
              className="col-span-9 p-4 m-4"
              placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchbar;