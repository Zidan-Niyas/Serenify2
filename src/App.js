// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer"; // Ensure the import path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
