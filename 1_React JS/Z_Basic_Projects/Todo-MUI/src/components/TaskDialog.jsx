import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { Stack } from "@mui/material";

export default function TaskDialog({ open, onClose, onSave, task }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setText(task.text);
      setDueDate(task.dueDate || "");
    } else {
      setText("");
      setDueDate("");
    }
  }, [task, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave({
      id: task ? task.id : null,
      text,
      dueDate,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? "Edit Task" : "Add Task"}</DialogTitle>
      <DialogContent>
        <form id="task-form" onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            label="Task"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setDueDate(new Date().toISOString().split("T")[0])}
            >
              Today
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                setDueDate(tomorrow.toISOString().split("T")[0]);
              }}
            >
              Tomorrow
            </Button>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="task-form" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
