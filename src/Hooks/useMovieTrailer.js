import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addmovietrailer } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/Constant";

const useMovieTrailer = (movieId) => {


  const dispatch = useDispatch();

  const movieTrailer = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const data = await response.json();
    const filteredData = data.results?.filter((video) => video.type === "Trailer");
    const trailer = filteredData.length > 1 ? filteredData[Math.floor(Math.random() * filteredData.length)] : (filteredData.length === 1 ? 
                       filteredData[0] : data.results[0]);
    dispatch(addmovietrailer(trailer))
  }
  useEffect(() => {
    movieTrailer()
  }, []
  );
}
export default useMovieTrailer;