import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskTransferList from "./components/TaskTransferList";
import TaskDialog from "./components/TaskDialog";

const LOCAL_STORAGE_KEY = "mui_todo_tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setTasks(parsed);
      } catch (err) {
        console.error("Invalid localStorage data:", err);
      }
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  const handleOpenAdd = () => {
    setEditTask(null);
    setOpenDialog(true);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveTask = (task) => {
    if (task.id) {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
    } else {
      const newTask = {
        ...task,
        id: Date.now(),
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
    }
    handleCloseDialog();
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleLoadRandomTask = async () => {
    try {
      const res = await fetch("https://dummyjson.com/todos/random");
      const randomTodo = await res.json();

      const newTask = {
        id: Date.now(),
        text: randomTodo.todo || "Random Task",
        completed: randomTodo.completed || false,
        dueDate: "",
      };

      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Failed to fetch random task:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, position: "relative" }}>
        {/* Header */}
        <Typography variant="h4" gutterBottom>
          MUI Todo / Task Manager
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {currentTime}
        </Typography>

        {/* Controls */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Filter</InputLabel>
            <Select
              label="Filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" onClick={handleLoadRandomTask}>
            Load Random Task
          </Button>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Task Transfer UI */}
        <TaskTransferList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Floating Add Button */}
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpenAdd}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Paper>

      {/* Dialog for Add/Edit Task */}
      <TaskDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSave={handleSaveTask}
        task={editTask}
      />
    </Container>
  );
}

export default App;
