import React, { useState } from "react";
import { TextField, Button, Card, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TextField
        label="Новая задача"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить
      </Button>
      <div>
        {tasks.map((task, index) => (
          <Card key={index}>
            <p>{task}</p>
            <IconButton onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
