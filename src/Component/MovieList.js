import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  const scrollStyle = {
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
  };

  const hideScrollbar = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
  
  return (
    <div className='px-6 bg-transparent'>
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
       <div style={{ ...scrollStyle, ...hideScrollbar }} className='flex'>
      <div className='flex'>
        {movies?.map(movies => <MovieCard key= {movies?.id} posterPath={movies?.poster_path}/>)}
      </div>
       </div>
    </div>
  )
}

export default MovieList