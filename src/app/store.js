import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "../features/chats/chatsSlice";
import messagesSlice from "../features/chats/messagesSlice";
import chatMiddleware from "../features/chats/chatMiddleware";

export const store = configureStore({
  reducer: {
    chats: chatSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chatMiddleware);
  },
});
