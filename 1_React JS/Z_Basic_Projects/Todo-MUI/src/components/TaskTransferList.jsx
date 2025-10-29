// TaskTransferList.js

import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Checkbox,
  Button,
  Divider,
  Typography,
} from "@mui/material";

// helper set operations
function not(a, b) {
  return a.filter((value) => !b.includes(value));
}
function intersection(a, b) {
  return a.filter((value) => b.includes(value));
}
function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TaskTransferList({ tasks, onToggleComplete, onEdit }) {
  // tasks is filtered (by filter) but we need to separate pending vs completed
  const pending = tasks.filter((t) => !t.completed).map((t) => t.id);
  const completed = tasks.filter((t) => t.completed).map((t) => t.id);

  // Local internal state
  const [checked, setChecked] = useState([]); // array of ids currently checked
  const [left, setLeft] = useState(pending);
  const [right, setRight] = useState(completed);

  // Whenever tasks changes, update left/right lists
  useEffect(() => {
    setLeft(pending);
    setRight(completed);
    // also remove any checked that no longer exist
    setChecked((prev) => prev.filter((id) => tasks.some((t) => t.id === id)));
  }, [tasks]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  function handleCheckbox(event) {
    // console.log(event);
  }

  const handleAllRight = () => {
    // mark all left tasks as completed
    left.forEach((id) => onToggleComplete(id));
  };
  const handleAllLeft = () => {
    // mark all right tasks as active
    right.forEach((id) => onToggleComplete(id));
  };

  const handleCheckedRight = () => {
    leftChecked.forEach((id) => onToggleComplete(id));
    setChecked((prev) => prev.filter((id) => !leftChecked.includes(id)));
  };
  const handleCheckedLeft = () => {
    rightChecked.forEach((id) => onToggleComplete(id));
    setChecked((prev) => prev.filter((id) => !rightChecked.includes(id)));
  };



  const customList = (title, sideIds) => {
    return (
      <Paper sx={{ width: 250, height: 300, overflow: "auto", p: 1 }}>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        
        <Divider />
        <List dense component="div" role="list">
          {sideIds.map((id) => {
            const task = tasks.find((t) => t.id === id);
            const labelId = `transfer-list-item-${id}-label`;
            return (
              <ListItem
                key={id}
                role="listitem"
                disablePadding
                secondaryAction={
                  <Button size="small" onClick={() => onEdit(task)}>
                    Edit
                  </Button>
                }
              >
                <ListItemButton onClick={handleToggle(id)}>
                  <ListItemIcon>
                    <Checkbox
                      onChange={handleCheckbox}
                      checked={checked.indexOf(id) !== -1}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={
                      <span
                        style={{
                          textDecoration: task?.completed
                            ? "line-through"
                            : "none",
                          color: task?.completed ? "gray" : "inherit",
                          transition: "all 0.2s ease-in-out",
                        }}
                      >
                        {task?.text}
                      </span>
                    }
                    secondary={task?.dueDate ? `Due: ${task?.dueDate}` : ""}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem />
          
        </List>
        
      </Paper>
    );
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>{customList("Pending", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 1 }}
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 1 }}
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move checked right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 1 }}
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move checked left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 1 }}
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Completed", right)}</Grid>
    </Grid>
  );
}
