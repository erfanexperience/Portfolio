import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMobile from "./AppMobile";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function RenderApp() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.StrictMode>
      {windowWidth >= 700 ? <App /> : <AppMobile />}
    </React.StrictMode>
  );
}

root.render(<RenderApp />);

reportWebVitals();

// Prevoius Version

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
