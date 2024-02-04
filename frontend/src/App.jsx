import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import Registration from "./Registration";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import { Navbar } from "./Navbar";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket/:id" element={<QRCodeGenerator />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
