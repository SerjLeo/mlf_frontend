import React from 'react';
import AppRouter from "./router/AppRouter";
import Header from "./components/Header/Header";
import "./assets/styles/app.scss"

function App() {
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
