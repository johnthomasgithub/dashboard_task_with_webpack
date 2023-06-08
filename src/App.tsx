import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Auth from "./pages/Autth";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default App;
