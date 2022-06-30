import { Card } from "react-bootstrap";
function Message({ message }) {
  return (
    <Card className="mb-2">
      <Card.Header>
        {message.name} / {message.createdAt}
      </Card.Header>
      <Card.Body>{message.text}</Card.Body>
    </Card>
  );
}
export default Message;
