import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Draggable from "react-draggable";
import "./App.css";
import mainTv from "./Assets/mainTv.webp";
import vhfToggle from "./Assets/vhfToggle.webp";
import switchKey from "./Assets/switchKey.webp";
import Arrow from "./Assets/Arrow.png";

import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

function App() {
  const [vhfPosition, setVhfPosition] = useState(0);
  const [noiseOpacity, setNoiseOpacity] = useState(0.0);
  const [isTvOn, setIsTvOn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleDrag = (e, ui) => {
    const newY = ui.y;
    if (newY >= -95 && newY <= 7) {
      setVhfPosition(newY);
    }
  };

  useEffect(() => {
    const range = 122;
    const opacity = 0.0 + Math.max(0.0, (-vhfPosition / range) * 0.36);
    setNoiseOpacity(opacity);
  }, [vhfPosition]);

  const toggleTv = () => {
    if (isTvOn) {
      setShowContent(false);
      setTimeout(() => setIsTvOn(false), 500); // Delay turning off the TV
    } else {
      setIsTvOn(true);
      setTimeout(() => setShowContent(true), 1200); // Delay showing content
    }
  };

  return (
    <div className="App">
      <div className={`parentContainer ${isTvOn ? "tv-on" : ""}`}>
        <div className="initialMessage">
          <h4>
            Hey,
            <br />
            You can turn the TV on from here
          </h4>
          <img id="Arrow" src={Arrow} alt="Arrow" />
        </div>
        <img id="mainTv" src={mainTv} alt="mainTv" />
        <Draggable
          axis="y"
          bounds={{ top: -95, bottom: 7 }}
          position={{ x: 0, y: vhfPosition }}
          onDrag={handleDrag}
          disabled={!isTvOn}
        >
          <img id="vhfToggle" src={vhfToggle} alt="" />
        </Draggable>
        <img id="switchKey" src={switchKey} alt="" onClick={toggleTv} />
        <NavLink
          to="/"
          className={({ isActive }) =>
            `pageSelector${isActive ? " active" : ""}`
          }
          id="pageSelectorHome"
        >
          <span className="buttonFace"></span>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `pageSelector${isActive ? " active" : ""}`
          }
          id="pageSelectorWork"
        >
          <span className="buttonFace"></span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `pageSelector${isActive ? " active" : ""}`
          }
          id="pageSelectorAbout"
        >
          <span className="buttonFace"></span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `pageSelector${isActive ? " active" : ""}`
          }
          id="pageSelectorContact"
        >
          <span className="buttonFace"></span>
        </NavLink>
        <div id="whiteNoise" className={showContent ? "visible" : ""}>
          <div id="whiteNoiseContent" style={{ opacity: noiseOpacity }}></div>
        </div>
        <div className={`childContainer ${showContent ? "visible" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
