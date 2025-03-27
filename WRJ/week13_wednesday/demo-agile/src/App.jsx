import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrum from "./pages/Scrum";
import Kanban from "./pages/Kanban";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrum" element={<Scrum />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
