import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id: number;
  text: string;
  type: "sent" | "received";
  timestamp: number;
}

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    messageSent: (state, action: PayloadAction<{ text: string }>) => {
      const { text } = action.payload;
      state.messages.push({
        id: state.messages.length,
        text,
        type: "sent",
        timestamp: Date.now(),
      });
    },
    messageReceived: (state, action: PayloadAction<{ text: string }>) => {
      const { text } = action.payload;
      state.messages.push({
        id: state.messages.length,
        text,
        type: "received",
        timestamp: Date.now(),
      });
    },
  },
});

export const messageAction = messageSlice.actions;
export default messageSlice;
