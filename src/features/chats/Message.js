import { Card } from "react-bootstrap";
import styled from "styled-components";
function Message({ message }) {
  return (
    <Card className="mb-2">
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>
        <div>{message.text}</div>
        {message.imageURL && <SImage src={message.imageURL} />}
      </Card.Body>
    </Card>
  );
}
export default Message;

const SImage = styled.img`
  max-width: 200px;
  margin: 10px 0;
`;
