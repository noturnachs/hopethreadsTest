import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./components/About"; // Import the About component
import Programs from "./components/Programs"; // Import the Home component
import Home from "./components/Home";
import GetInvolved from "./components/GetInvolved"; // Import the GetInvolved component
import Fundraisers from "./components/Fundraisers";

function App() {
  return (
    <div className="main-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/fundraisers" element={<Fundraisers />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
