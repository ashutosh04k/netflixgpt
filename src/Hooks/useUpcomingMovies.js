import { useEffect } from "react";
import { useDispatch } from "react-redux"

import { API_OPTIONS } from "../Utils/Constant";
import { getupcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () =>{
  const dispatch = useDispatch();
  
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const result = await response.json();
      dispatch(getupcomingMovies(result.results))
    } catch (error) {
      console.error(error);
    }
  }; 


  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;