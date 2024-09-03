import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptsearchReducer from "./GptSearchSlice";
import configReducer from './ConfigSlice';

const Appstore = configureStore({
    reducer:{
      user:userReducer,
      movies:moviesReducer,
      gptsearch:gptsearchReducer,
      config: configReducer,
    }

});

export default Appstore; 