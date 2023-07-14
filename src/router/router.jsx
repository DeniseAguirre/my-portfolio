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
        { path: "/sobre-mi", element: <Hero /> },
        { path: "/tecnologias", element: <Skills /> },
        { path: "/proyectos", element: <Projects /> },
      ],
    },
  ]);
  export default routes;