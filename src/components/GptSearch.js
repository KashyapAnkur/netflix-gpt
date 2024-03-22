import React from 'react';
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={LOGIN_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchbar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptSearch;