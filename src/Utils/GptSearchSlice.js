import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name:'GPt',
  initialState:{
    currentstate:false,
  },
  reducers:{
    initialState:(state,action) =>{
      state.currentstate = !state.currentstate;
    }
  }
});

export const {initialState} = GptSearchSlice.actions;

export default GptSearchSlice.reducer;