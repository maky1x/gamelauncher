import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "../Theme/theme";
import { ContextProvider } from "../Context/ContextProvider";
import './App.css';
import { StorePage } from "../Store/StorePage";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <ContextProvider>
          <StorePage />
        </ContextProvider>
      </Router>
    </ThemeProvider >
  );
}

export default App;
