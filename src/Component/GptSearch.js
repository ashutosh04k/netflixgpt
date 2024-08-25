import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../Utils/Constant';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="logo" 
        />
      </div>
      <GptSearchbar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch