import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    movies.nowplayingmovies &&
    <div className=' bg-black'>
      <div className='-mt-60 relative z-20'>

      <MovieList title={"Now Playing"} movies={movies?.nowplayingmovies}/>
      <MovieList title={"Top Rated"} movies={movies?.toprated}/>
      <MovieList title={"Popular"} movies={movies?.popularmovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingmovies}/>
      {/* <MovieList title={"Horror Movies"} movies={movies?.nowplayingmovies}/>
      <MovieList title={"Trending Series"} movies={movies?.nowplayingmovies}/> */}
      </div>
    </div>
  )
}

export default Secondarycontainer