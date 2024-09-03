import React from 'react';
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../Utils/Constant';
import { useSelector } from 'react-redux';

const GptSearch = () => {

  const gptMoviesResult = useSelector(store => store.gptsearch.gptMoviesResult)
  return (
    
    <div 
      className="relative w-full min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${BG_URL})` }}
      >
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
      <div className="mt-[5%] md:pt-10 relative z-10 min-h-screen">
        <GptSearchbar />
        {gptMoviesResult && <GptMovieSuggestion />}
      </div>
    </div>
  );
};

export default GptSearch;
