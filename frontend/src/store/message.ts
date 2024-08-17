import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id: number;
  text: string;
  type: "sent" | "received";
  contentType: "text" | "image";
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
    messageSent: (state, action: PayloadAction<{ text: string; type: "text" | "image" }>) => {
      const { text, type } = action.payload;
      state.messages.push({
        id: state.messages.length,
        text,
        type: "sent",
        contentType: type,
        timestamp: Date.now(),
      });
    },
    messageReceived: (state, action: PayloadAction<{ text: string; type: "text" | "image" }>) => {
      const { text, type } = action.payload;
      state.messages.push({
        id: state.messages.length,
        text,
        type: "received",
        contentType: type,
        timestamp: Date.now(),
      });
    },
  },
});

export const messageAction = messageSlice.actions;
export default messageSlice;