import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:'movies',
  initialState:{
    nowplayingmovies:null,
    movietrailer:null,
    popularmovies:null,
    upcomingmovies:null,
    toprated:null,
  },
  reducers:{
    nowplayingmovies:(state,action) =>{
      state.nowplayingmovies = action.payload;
    },
    addmovietrailer:(state, action) =>{
      state.movietrailer = action.payload;
    },
    getpopularMovies:(state, action) =>{
      state.popularmovies = action.payload;
    },
    getupcomingMovies:(state, action) =>{
      state.upcomingmovies = action.payload;
    },
    gettopratedMovies:(state, action) =>{
      state.toprated = action.payload;
    },
  },
});

export const {nowplayingmovies,addmovietrailer,getpopularMovies,getupcomingMovies,gettopratedMovies} = movieSlice.actions;

export default movieSlice.reducer; 