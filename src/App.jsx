
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admission from "./pages/Admission";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div id="top" className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admissions" element={<Admission />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
