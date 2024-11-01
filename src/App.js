import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./containers/Movies";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Details from "./containers/info";
import Trending from "./containers/Trending";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
