import { useForm } from "react-hook-form";
import { FormControl, Button } from "react-bootstrap";
import FileUpload from "../../components/FileUpload";
import PropTypes from "prop-types";
import Location from "../../components/Location";
import Alert from "react-bootstrap/Alert";

function MessageForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const location = watch("location");
  const imageURL = watch("imageURL");

  const onFormSubmit = (data) => {
    onSubmit(data);
    setValue("text", "");
    setValue("location", null);
    setValue("imageURL", "");
  };
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSubmit(onFormSubmit)();
    }
  };

  const handleImageSubmit = (imageURL) => {
    console.log(imageURL);
    setValue("imageURL", imageURL);
  };

  const handleLocationChange = (location) => {
    setValue("location", location);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-2">
        <FormControl
          as="textarea"
          placeholder="Текст сообщения"
          onKeyDown={handleKeyDown}
          {...register("text", { required: true, maxLength: 200 })}
        />
        {errors.text?.type === "required" && (
          <Alert className="mt-2" variant={"danger"}>
            Сообщение не может быть пустым
          </Alert>
        )}

        {/* {errors.requiredField && <span>This field is required</span>} */}
      </div>
      <div className="mb-2">
        <FileUpload
          onUpload={handleImageSubmit}
          value={imageURL}
          {...register("imageURL")}
        />
      </div>
      <div className="mb-2">
        <Location
          {...register("location")}
          onChange={handleLocationChange}
          value={location}
        />
      </div>
      <Button className="mb-3" type="submit">
        Send
      </Button>
    </form>
  );
}

MessageForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
export default MessageForm;
