import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import {
  addChat,
  getChats,
  deleteChat,
  selectChats,
} from "../features/chats/chatsSlice";

function Chats() {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  useEffect(() => {
    dispatch(getChats());
  }, []);

  const handleAddChat = () => {
    const title = prompt("Введите название чата: ");
    dispatch(addChat(title));
  };

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  return (
    <div>
      <h1>Чаты</h1>

      <div>
        <Button
          variant="success"
          onClick={handleAddChat}
          className="chat-button-add"
        >
          + Добавить чат
        </Button>
        <Nav variant="pills" className="chat-list">
          {chats.map((chat) => (
            <Nav.Item key={chat._id} className="chat-button">
              <Nav.Link
                as={Link}
                to={`/chats/${chat._id}`}
                href={`/chats/${chat._id}`}
                data-id={chat._id}
              >
                {chat.title}
                <Button
                  className="chat-button-delete"
                  variant="outline-danger"
                  onClick={() => handleDeleteChat(chat._id)}
                >
                  X
                </Button>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Chats;
