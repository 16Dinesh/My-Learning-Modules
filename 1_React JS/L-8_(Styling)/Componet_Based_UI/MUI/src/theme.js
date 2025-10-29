import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: { default: "#f8f9fa" },
        }
      : {
          background: { default: "#121212" },
        }),
  },
});
