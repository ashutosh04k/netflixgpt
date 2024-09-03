import { useEffect } from "react";
import { useDispatch } from "react-redux"

import { API_OPTIONS } from "../Utils/Constant";
import { gettopratedMovies} from "../Utils/moviesSlice";

const useTopRated = () =>{
  const dispatch = useDispatch();
  
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const result = await response.json();
      dispatch(gettopratedMovies(result.results))
    } catch (error) {
      console.error(error);
    }
  }; 


  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useTopRated;