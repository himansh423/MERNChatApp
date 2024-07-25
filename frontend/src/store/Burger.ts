import { createSlice } from "@reduxjs/toolkit";

export interface BurgerState {
  burClick: boolean | null;
}

const initialState: BurgerState = {
  burClick: null,
};

const BurgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burgerClick: (state) => {
      state.burClick = true;
    },
    crossClick: (state) => {
      state.burClick = false;
    },
    initialClick: (state) => {
      state.burClick = null;
    },
  },
});

export const BurgerAction = BurgerSlice.actions;

export default BurgerSlice;
