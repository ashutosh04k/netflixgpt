import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constant'

const MovieCard = ({ key,posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'>

      <img className="rounded-lg"alt="" src={IMG_CDN_URL + posterPath}/>

    </div>
  )
}

export default MovieCard