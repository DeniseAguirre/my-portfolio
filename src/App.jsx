import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./router/router";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // <Router>
    //   <ScrollToTop/>
    //   <div>
    //     <NavBar />
    //     <Routes element={routes} />
        <Index/>
    //   </div>
    // </Router>
  );
}

export default App;
