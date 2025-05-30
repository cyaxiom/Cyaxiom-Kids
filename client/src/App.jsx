import React from "react"; // Add this import
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/z-index.component";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
