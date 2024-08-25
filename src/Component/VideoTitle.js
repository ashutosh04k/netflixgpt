import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";

const VideoTitle = ({ title, overview }) => {
  const langkey = useSelector((store) => store.config.lang)
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview.substring(0,110) + '...'}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
        
      ▶
      {lang[langkey].play}
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
        {lang[langkey].moreinfo}
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;