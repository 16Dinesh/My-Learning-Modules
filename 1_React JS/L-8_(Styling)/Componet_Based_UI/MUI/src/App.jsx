import { useState, useMemo } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import ProductGrid from "./components/ProductGrid";
import { getDesignTokens } from "./theme";
import { createTheme } from "@mui/material/styles";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="bold">
            My MUI Blog Products
          </Typography>
          <IconButton onClick={toggleMode} color="inherit">
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <ProductGrid />
      </Container>
    </ThemeProvider>
  );
}
