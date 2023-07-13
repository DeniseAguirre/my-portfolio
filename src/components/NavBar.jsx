import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
 

  return (
    <>
      <nav className="w-screen">
        <ul className="flex justify-end w-full">
          <li className='nav-item p-4'>
          <Link to="/">Sobre Mi</Link>
           
          </li>
          <li className='nav-item p-4'>
          <Link to="/skills">Tecnologías</Link>
           
          </li>
          <li className='nav-item p-4'>
          <Link to="/projects">Proyectos</Link>
            
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
