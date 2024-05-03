import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./style.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(((fahrenheitValue - 32) * 5) / 9);
  };

  return (
    <div>
      <TextField
        className="input"
        label="Цельсий"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <br />
      <TextField
        className="input"
        label="Фаренгейт"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <Button
        onClick={() => {
          setCelsius("");
          setFahrenheit("");
        }}
      >
        Сбросить
      </Button>
    </div>
  );
};

export default TemperatureConverter;
