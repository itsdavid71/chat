import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";
import axios from "axios";
import api from "../../helpers/api";

const initialState = {
  chats: [],
};

export const getChats = createAsyncThunk("chats/getChats", async () => {
  const response = await api.get(`/chats`);
  return response.data;
});

export const addChat = createAsyncThunk("chats/addChat", async (title) => {
  const response = await api.post(`/chats`, {
    title,
  });
  return response.data;
});

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
    builder.addCase(addChat.fulfilled, (state, action) => {
      state.chats.push(action.payload);
    });
  },
});

// export const { increment, decrement, incrementByAmount } = chatsSlice.actions;

export const selectChats = (state) => state.chats.chats;

export default chatsSlice.reducer;
