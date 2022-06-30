import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, selectMessages } from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";
function Chat() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getMessages(chatId));
  }, [chatId]);
  console.log(messages);
  return (
    <div>
      <h1>Чат {chatId}</h1>
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
}

export default Chat;
