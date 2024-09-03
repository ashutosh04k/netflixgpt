import React from 'react';
import Header from './Header'; 
import useNowPlayingMovies from '../Hooks/useNowPlayingmovies';
import MainContainer from './MainContainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRated from '../Hooks/useTopRated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showgptsearch = useSelector(store => store.gptsearch?.currentstate)
  useNowPlayingMovies();
  usePopularMovies(); 
  useUpcomingMovies();
  useTopRated();
  return (
    <div>
      <Header/>
      {showgptsearch ? (
        <div className='pt-[10%] md:pt-[0%]'>
        <GptSearch/>
        </div>
        
      ) : (
      <>
        <MainContainer/>
        <Secondarycontainer/>
        </>
        )}
    
      </div>
  );
};

export default Browse;
