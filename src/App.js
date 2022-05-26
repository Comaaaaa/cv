import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Abilities from "./pages/Abilities";
import Navigation from "./components/Navigation";

const App = () => {
  <link rel="icon" href="../public/media/Dev.svg"></link>
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navigation />
          <div className="app">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/abilities" element={<Abilities />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
