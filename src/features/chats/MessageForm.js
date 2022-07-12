import { useForm } from "react-hook-form";
import { FormControl, Button } from "react-bootstrap";

function MessageForm({ onSubmit }) {
  const { register, handleSubmit, setValue } = useForm();
  const onFormSubmit = (data) => {
    onSubmit(data);
    setValue("text", "");
  };
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSubmit(onFormSubmit)();
    }
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-2">
        <FormControl
          type="text"
          placeholder="Ваше имя"
          {...register("name")}
        ></FormControl>
      </div>
      <div className="mb-2">
        <FormControl
          as="textarea"
          onKeyDown={handleKeyDown}
          placeholder="Текст сообщения"
          {...register("text")}
        ></FormControl>
      </div>
      <Button className="mb-2" variant="success" type="submit">
        Send
      </Button>
    </form>
  );
}

export default MessageForm;
