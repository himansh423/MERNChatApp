import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Room {
  RoomID: string;
}



const initialState: Room = {
  RoomID:""
};

const createdChatRoomSlice = createSlice({
  name: "createdChatRoom",
  initialState,
  reducers: {
    ChatRoomCreated: (state, action: PayloadAction<Room>) => {
      const { RoomID }:any = action.payload;
      state.RoomID = RoomID; 
    },
  },
});

export const CreatedChatRoomActions = createdChatRoomSlice.actions;
export default createdChatRoomSlice;
