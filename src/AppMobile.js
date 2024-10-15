import React, { useState, useEffect, useRef } from "react";
import {
  Route,
  Routes,
  NavLink,
  useLocation,
  HashRouter,
} from "react-router-dom";
import Draggable from "react-draggable";
import "./AppMobile.css";
import mainTvMobile from "../src/Pages/Mobile/Assets/MainTvMobile.png";
import vhfToggleMobile from "../src/Pages/Mobile/Assets/vhfToggle.webp";
import switchKeyMobile from "../src/Pages/Mobile/Assets/switchKey.webp";
import Arrow from "../src/Pages/Mobile/Assets/Arrow.png";

import HomeMobile from "./Pages/Mobile/HomeMobile";
import WorkMobile from "./Pages/Mobile/WorkMobile";
import AboutMobile from "./Pages/Mobile/AboutMobile";
import ContactMobile from "./Pages/Mobile/ContactMobile";

function AppMobileContent() {
  const [vhfPosition, setVhfPosition] = useState(0);
  const [noiseOpacity, setNoiseOpacity] = useState(0.02);
  const [isTvOn, setIsTvOn] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [scale, setScale] = useState(1);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [hasShownSecondMessage, setHasShownSecondMessage] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const baseWidth = 430;
        const baseHeight = 932;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const scaleX = windowWidth / baseWidth;
        const scaleY = windowHeight / baseHeight;
        const newScale = Math.min(scaleX, scaleY);

        setScale(newScale);

        container.style.transform = `scale(${newScale})`;
        container.style.width = `${baseWidth}px`;
        container.style.height = `${baseHeight}px`;

        const scaledWidth = baseWidth * newScale;
        const scaledHeight = baseHeight * newScale;
        container.style.left = `${(windowWidth - scaledWidth) / 2}px`;
        container.style.top = `${(windowHeight - scaledHeight) / 2}px`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrag = (e, ui) => {
    const newX = ui.x;
    const maxX = isTvOn ? 70 : 0;
    if (newX >= 0 && newX <= maxX) {
      setVhfPosition(newX);
    }
  };

  useEffect(() => {
    const range = isTvOn ? 70 : 0;
    const opacity = 0.02 + Math.max(0.0, (vhfPosition / range) * 0.36);
    setNoiseOpacity(opacity);
  }, [vhfPosition, isTvOn]);

  useEffect(() => {
    let appearTimeout, disappearTimeout;
    if (isTvOn && !hasShownSecondMessage) {
      appearTimeout = setTimeout(() => {
        setShowSecondMessage(true);
      }, 4000);

      disappearTimeout = setTimeout(() => {
        setShowSecondMessage(false);
        setHasShownSecondMessage(true);
      }, 9000);
    }

    return () => {
      clearTimeout(appearTimeout);
      clearTimeout(disappearTimeout);
    };
  }, [isTvOn, hasShownSecondMessage]);

  const toggleTv = () => {
    if (isTvOn) {
      setShowContent(false);
      setShowSecondMessage(false);
      setTimeout(() => setIsTvOn(false), 300);
    } else {
      setIsTvOn(true);
      setTimeout(() => setShowContent(true), 1700);
    }
  };

  const isActive = (path) => {
    return (
      location.pathname === path || (path === "/" && location.pathname === "")
    );
  };

  return (
    <div className="AppMobile">
      <div
        ref={containerRef}
        className={`AppMobileParentContainer ${isTvOn ? "tv-on" : ""}`}
      >
        <div className="initialMessageMobile">
          <img id="ArrowMobile" src={Arrow} alt="Arrow" />
          <h4>
            Hey,
            <br />
            Go ahead, turn the TV on from here!
          </h4>
        </div>

        {showSecondMessage && (
          <div className="SecondMessageMobile">
            <h4 id="Navigate">
              Navigate through pages,
              <br />
              by changing the channels.
            </h4>
            <img id="SecondArrowMobile" src={Arrow} alt="Arrow" />
          </div>
        )}

        <img id="mainTvMobile" src={mainTvMobile} alt="mainTvMobile" />
        <img
          id="switchKeyMobile"
          src={switchKeyMobile}
          alt="switchKeyMobile"
          onClick={toggleTv}
        />
        <Draggable
          axis="x"
          bounds={{ left: 0, right: isTvOn ? 70 : 0 }}
          position={{ x: vhfPosition, y: 0 }}
          onDrag={handleDrag}
          disabled={!isTvOn}
        >
          <img
            id="vhfToggleMobile"
            src={vhfToggleMobile}
            alt="vhfToggleMobile"
          />
        </Draggable>
        <NavLink
          to="/"
          className={`pageSelectorMobile${isActive("/") ? " active" : ""}`}
          id="pageSelectorMobile1"
        >
          <span className="buttonFaceMobile"></span>
        </NavLink>
        <NavLink
          to="/work"
          className={`pageSelectorMobile${isActive("/work") ? " active" : ""}`}
          id="pageSelectorMobile2"
        >
          <span className="buttonFaceMobile"></span>
        </NavLink>
        <NavLink
          to="/about"
          className={`pageSelectorMobile${isActive("/about") ? " active" : ""}`}
          id="pageSelectorMobile3"
        >
          <span className="buttonFaceMobile"></span>
        </NavLink>
        <NavLink
          to="/contact"
          className={`pageSelectorMobile${
            isActive("/contact") ? " active" : ""
          }`}
          id="pageSelectorMobile4"
        >
          <span className="buttonFaceMobile"></span>
        </NavLink>
        <div id="whiteNoiseMobile" className={showContent ? "visible" : ""}>
          <div
            id="whiteNoiseContentMobile"
            style={{ opacity: noiseOpacity }}
          ></div>
        </div>
        <div className={`childContainerMobile ${showContent ? "visible" : ""}`}>
          <Routes>
            <Route path="/" element={<HomeMobile />} />
            <Route path="/work" element={<WorkMobile />} />
            <Route path="/about" element={<AboutMobile />} />
            <Route path="/contact" element={<ContactMobile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AppMobile() {
  return (
    <HashRouter>
      <AppMobileContent />
    </HashRouter>
  );
}

export default AppMobile;
