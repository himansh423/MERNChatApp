import { configureStore } from "@reduxjs/toolkit";
import BurgerSlice from "./Burger";
import messageSlice from "./message";

const webStore = configureStore({
  reducer: {
    burger: BurgerSlice.reducer,
    message: messageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof webStore.getState>;
export type AppDispatch = typeof webStore.dispatch;

export default webStore;
