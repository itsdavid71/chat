import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "../features/chats/chatsSlice";

export const store = configureStore({
  reducer: {
    chats: chatSlice,
  },
});
