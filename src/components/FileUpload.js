import { useState, useEffect, useRef } from "react";
import { FormControl } from "react-bootstrap";
import api from "../helpers/api";
import Spinner from "react-bootstrap/Spinner";

function FileUpload({ onUpload, value }) {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    if (!value) {
      fileRef.current.value = null;
    }
  }, [value]);

  const handleChange = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    const response = await api.post("/upload", formData);
    setLoading(true);

    if (response.data.fileURL) {
      setLoading(false);
      onUpload(response.data.fileURL);
    }
  };
  return (
    <div>
      {loading && (
        <Spinner
          size="sm"
          className="ms-2"
          variant="default"
          animation="border"
        />
      )}
      <FormControl type="file" onChange={handleChange} ref={fileRef} />
      {value && "Nice"}
    </div>
  );
}

export default FileUpload;
