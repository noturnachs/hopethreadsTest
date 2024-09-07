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
    <div className="flex flex-col min-h-screen main-bg">
      {" "}
      {/* Use flexbox and min-height */}
      <Router>
        <Navbar />
        <div className="flex-grow">
          {" "}
          {/* Allow the main content to grow */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/fundraisers" element={<Fundraisers />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </div>
        <Footer /> {/* Add the Footer component here */}
      </Router>
    </div>
  );
}

export default App;
