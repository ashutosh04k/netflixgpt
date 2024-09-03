import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getpopularMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/Constant";



const usePopularMovies = () =>{
  const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular\?page=1', API_OPTIONS);
      const result = await response.json();
      dispatch(getpopularMovies(result.results))
    } catch (error) {
      console.error(error);
    }
  }; 


  useEffect(() => {
   getPopularMovies();
  }, []);
}

export default usePopularMovies;