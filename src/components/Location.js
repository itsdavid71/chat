import { useState } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function Location({ onChange, value }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSuccess = (pos) => {
    setLoading(false);
    onChange(pos.coords);
  };
  const onError = (err) => {
    setLoading(false);
    setError(true);
  };
  const handleClick = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };
  return (
    <Button type="button" variant="outline-primary" onClick={handleClick}>
      Определить координаты
      {loading && (
        <Spinner
          size="sm"
          className="ms-2"
          variant="default"
          animation="border"
        />
      )}
      {value && <span className="ms-2">✅</span>}
      {error && <span className="ms-2">x</span>}
    </Button>
  );
}

export default Location;
