import { useForm } from "react-hook-form";

function MessageForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <input type="text" placeholder="Ваше имя" {...register("name")}></input>
      </div>
      <div>
        <textarea
          placeholder="Текст сообщения"
          {...register("text")}
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
