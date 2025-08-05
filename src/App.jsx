import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Call from "./Components/Call";
import SearchPage from "./Components/Pages/Searchpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Call/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;