import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowplayingmovies);
  if (!movies) return null;

  const randomIndex = Math.floor(Math.random() * 10) + 1;
  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer