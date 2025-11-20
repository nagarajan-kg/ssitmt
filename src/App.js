// import React from "react";
// import Home from "./pages/Home";

// export default function App() {
//   return <Home />;
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      // animation speed
      once: true,          // one-time animation
      disable: "mobile",   // MOBILE devices-ல AOS disable ஆகும்
    });
  }, []);

  return <Home />;
}
