import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "../features/chats/chatsSlice";
import messagesSlice from "../features/chats/messagesSlice";

export const store = configureStore({
  reducer: {
    chats: chatSlice,
    messages: messagesSlice,
  },
});
