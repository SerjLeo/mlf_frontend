import React from 'react';
import AppRouter from "./router/AppRouter";
import "./assets/styles/app.scss"
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <AppRouter/>
    </div>
  );
}

export default App;
