import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

  const {gptMoviesResult,GptMovieName}= useSelector((store)=> store.gptsearch);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {GptMovieName?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesResult[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion