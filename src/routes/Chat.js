import { useParams } from "react-router-dom";
function Chat() {
  const { chatId } = useParams();
  return (
    <div>
      <h1>Чат {chatId}</h1>
    </div>
  );
}

export default Chat;
