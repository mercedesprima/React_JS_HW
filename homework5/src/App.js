import React, { useReducer } from "react";
import ThemeToggle from "./ThemeToggle";
import "./App.css";

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`App ${state.theme}`}>
      <h1>ПЕРЕКЛЮЧЕНИЕ ТЕМЫ</h1>
      <ThemeToggle dispatch={dispatch} />
    </div>
  );
};

export default App;
