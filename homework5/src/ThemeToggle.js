import React from "react";

const ThemeToggle = ({ dispatch }) => {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className="themeToggle">
      <label for="themeToggle">Переключить тему:</label>
      <input type="checkbox" id="themeToggle" onChange={handleToggle} />
    </div>
  );
};

export default ThemeToggle;
