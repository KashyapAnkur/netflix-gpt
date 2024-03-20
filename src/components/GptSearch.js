import React from 'react';
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
          <img 
            src={LOGIN_BACKGROUND}
            alt="background"
          />
        </div>
        <GptSearchbar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;