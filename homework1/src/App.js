// import logo from "./logo.svg";
// import "./App.css";
import Message from "./components/Message.js";

const messageTitle = "20 апреля 2024г.";
const messageText =
  "Сегодня в нашем Цветочном клубе пройдет мастер-класс по свадебному букету. Вход свободный.";

function App() {
  return <Message title={messageTitle} text={messageText} />;
}

export default App;
