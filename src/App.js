import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./routes/Chats";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Container } from "react-bootstrap";
import Chat from "./routes/Chat";

function App() {
  return (
    <Wrapper apiKey="AIzaSyBEWfYnG7bYhE2NUEvCyKs5j_2-a4LGmgE">
      <Container>
        <Routes>
          <Route path="chats" element={<Chats />}>
            <Route path=":chatId" element={<Chat />}></Route>
          </Route>
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;
