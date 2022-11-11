import "./styles/App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HoussingSheet from "./pages/HousingSheet";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/housing" element={<HoussingSheet />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
