import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../Utils/languageConstant';
import openai from '../Utils/OpenAi';
import { API_OPTIONS } from '../Utils/Constant';
import { addGptMovieResult} from '../Utils/GptSearchSlice';

const GptSearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchinput = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick= async() =>{
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchinput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      console.log(gptQuery)
    const GptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const GptMovies = GptResult.choices?.[0]?.message?.content.split(",");;
    const PromiseArray = GptMovies.map((movie) => searchMovieTMDB(movie));
    const TmdbMovieResult = await Promise.all(PromiseArray);
    
    dispatch(addGptMovieResult({ GptMovieName: GptMovies, gptMoviesResult: TmdbMovieResult }));
  }
  
  return (
    <div className="relative flex justify-center bg-transparent pt-[0%] md:mt-[0%] md:mt-[10%]">
      <form className='w-full md:w-1/2 grid grid-cols-12 bg-black rounded-xl' onSubmit={(e)=> e.preventDefault()}>
        <input
        ref={searchinput}
         type="text" 
         className="p-4 m-4 col-span-9" 
         placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}> {lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchbar;