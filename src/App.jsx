import { Button, createTheme, ThemeProvider } from "@mui/material";
import Home from "./components/main/Navigation";

import React from "react";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif", // Set the font family to Poppins
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home></Home>
      </ThemeProvider>
    </>
  );
}

export default App;
