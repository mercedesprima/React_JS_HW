import "../Message.css";

function Message({ title, text }) {
  return (
    <div className="message">
      <h1 className="message__title">{title}</h1>
      <p className="message__text">{text}</p>
    </div>
  );
}

export default Message;
