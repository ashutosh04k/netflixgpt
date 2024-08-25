import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstant';

const GptSearchbar = () => {
  const langkey = useSelector((store) => store.config.lang)
  return (
    <div style={{border:'1px solid red'}} className="flex justify-center bg-white pt-[10%]">
      <form className='w-1/2 grid grid-cols-12 bg-black rounded-xl'>
        <input
         type="text" 
         className="p-4 m-4 col-span-9" 
         placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"> {lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchbar