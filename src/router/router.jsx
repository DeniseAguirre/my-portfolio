import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/skills", element: <Skills /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);
  export default routes;