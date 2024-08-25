import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstant'

const Secondarycontainer = () => {
  const langkey = useSelector((store) => store.config.lang)


  const movies = useSelector(store => store.movies)
  return (
    movies.nowplayingmovies &&
    <div className=' bg-black'>
      <div className='-mt-60 relative z-20'>

      <MovieList title={lang[langkey].nowplaying} movies={movies?.nowplayingmovies}/>
      <MovieList title={lang[langkey].toprated} movies={movies?.toprated}/>
      <MovieList title={lang[langkey].popular} movies={movies?.popularmovies}/>
      <MovieList title={lang[langkey].upcomingmovies} movies={movies?.upcomingmovies}/>
      {/* <MovieList title={"Horror Movies"} movies={movies?.nowplayingmovies}/>
      <MovieList title={"Trending Series"} movies={movies?.nowplayingmovies}/> */}
      </div>
    </div>
  )
}

export default Secondarycontainer