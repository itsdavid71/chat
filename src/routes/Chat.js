import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessages,
  selectMessages,
  connect,
  connected,
  addMessage,
  submitMessage,
} from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";
import MessageForm from "../features/chats/MessageForm";
function Chat() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getMessages(chatId));
    dispatch(connect());
  }, [chatId]);
  console.log(messages);

  const handleSubmit = ({ name, text }) => {
    const message = {
      chatId,
      name,
      text,
    };
    dispatch(submitMessage(message));
  };
  return (
    <div>
      <h1>Чат {chatId}</h1>
      <MessageForm onSubmit={handleSubmit} />
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
}

export default Chat;
