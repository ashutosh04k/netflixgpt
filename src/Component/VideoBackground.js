
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies.movietrailer)
  useMovieTrailer(movieId);

  return (

    <div className="w-[1520px] mx-auto">
      <iframe
        className="w-full aspect-video"
        src={
          `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`
        }

        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>

  )
}

export default VideoBackground