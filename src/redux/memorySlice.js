import { createSlice } from "@reduxjs/toolkit";
import item from "../items.json";

export const memorySlice = createSlice({
  name: "memory",
  initialState: {
    items: item,
    found:[],
    score:0,
    bitti:false
  },
  reducers: {
    puansil: (state) => {
      state.score -= 10
    },
    yaz: (state,action) => {
        state.found = state.found.concat(action.payload);
        state.score += 50;
    },
    bitir:(state) => {
        state.bitti = true;
        console.log("bitti")
    }
  },
});

export const { puansil, yaz, bitir} = memorySlice.actions;
export default memorySlice.reducer;
