import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./routes/Chats";
import { Container } from "react-bootstrap";
import Chat from "./routes/Chat";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="chats" element={<Chats />}>
          <Route path=":chatId" element={<Chat />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
