import React, { useState } from "react";
import Header from "./Header";
import Home from "./routes/Home";
import Fruit from "./routes/Fruit";
import Community from "./routes/Community";
import Login from "./routes/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/fruit" element={<Fruit />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/community" element={<Community />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
