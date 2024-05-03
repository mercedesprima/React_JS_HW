import logo from "./logo.svg";
import "./App.css";
import TemperatureConverter from "../../homework4/components/TemperatureConverter";
import TodoList from "../../homework4/components/ToDoList";

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
