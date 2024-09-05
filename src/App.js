import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./components/About"; // Import the About component
import Programs from "./components/Programs"; // Import the Programs component
import Home from "./components/Home";
import GetInvolved from "./components/GetInvolved"; // Import the GetInvolved component
import Fundraisers from "./components/Fundraisers";
import Donate from "./components/Donate"; // Import the Donate component
import Footer from "./components/Footer"; // Import the Footer component

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
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </Router>
    </div>
  );
}

export default App;
