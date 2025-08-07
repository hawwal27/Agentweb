import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Call from "./Components/Call";
// import SearchPage from "./Pages/Searchpage";
import DashboardLayout from "./Components/Component/Layout/dashboardlayout";
import Dashboard from "./Components/Component/pages/Dashboard";
import AddProperty from "./Components/Component/pages/AddProperty";
import Listings from "./Components/Component/pages/Listing";
import Messages from "./Components/Component/pages/Messages";
import Profile from "./Components/Component/pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Call />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="add-property" element={<AddProperty/>} />
          <Route path="listings" element={<Listings/>} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
