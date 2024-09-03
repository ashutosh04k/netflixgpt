import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name:'GPt',
  initialState:{
    currentstate:false,
    gptMoviesResult:null,
    GptMovieName:null,
  },
  reducers:{
    initialState:(state,action) =>{
      state.currentstate = !state.currentstate;
    },
    addGptMovieResult : (state,action) =>{
      const {gptMoviesResult,GptMovieName} = action.payload
      state.gptMoviesResult = gptMoviesResult;
      state.GptMovieName = GptMovieName;
    },
  }
});

export const {initialState , addGptMovieResult} = GptSearchSlice.actions;

export default GptSearchSlice.reducer;