import { createTheme, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const theme = createTheme();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
