import { configureStore } from "@reduxjs/toolkit";
import BurgerSlice from "./Burger";
import messageSlice from "./message";
import createdChatRoomSlice from "./createdChatroom";

const webStore = configureStore({
  reducer: {
    burger: BurgerSlice.reducer,
    message: messageSlice.reducer,
    createdChatroom: createdChatRoomSlice.reducer,
  },
});

export type RootState = ReturnType<typeof webStore.getState>;
export type AppDispatch = typeof webStore.dispatch;

export default webStore;
