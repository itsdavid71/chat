import { Card } from "react-bootstrap";
import styled from "styled-components";
import Map from "../../components/Map";
function Message({ message }) {
  return (
    <Card className="mb-2">
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>
        <div>{message.text}</div>
        {message.imageURL && <SImage src={message.imageURL} />}
        {message.location && (
          <div>
            <Map
              center={{
                lat: message.location.latitude,
                lng: message.location.longitude,
              }}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default Message;

const SImage = styled.img`
  max-width: 200px;
  margin: 10px 0;
`;
