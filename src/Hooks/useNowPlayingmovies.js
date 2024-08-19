import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { nowplayingmovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/Constant";



const useNowPlayingMovies = () =>{
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const result = await response.json();
      dispatch(nowplayingmovies(result.results))
    } catch (error) {
      console.error(error);
    }
  }; 


  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;