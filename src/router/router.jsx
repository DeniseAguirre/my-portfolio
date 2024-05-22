import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import AboutMe from "../components/AboutMe";
// import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Index /> },
      { path: "/home", element: <NavBar /> },
      // { path: "/about", element: <AboutMe /> },
      // { path: "/skills", element: <Skills /> },
      // { path: "/projects", element: <Projects /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);
export default routes;
