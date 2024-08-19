import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptsearchReducer from "./GptSearchSlice";

const Appstore = configureStore({
    reducer:{
      user:userReducer,
      movies:moviesReducer,
      gptsearch:gptsearchReducer,
    }

});

export default Appstore; 