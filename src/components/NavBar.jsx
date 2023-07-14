import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
 

  return (
    <>
      <nav className="w-screen flex">
        <div>
          <a href="#"><img className="w-20 h-auto" src="https://i.postimg.cc/1RK9BdsN/logoDA.png" alt="logoDA" /></a>
        </div>
        <ul className="flex justify-end w-full">
          <li className='nav-item p-4'>
          <Link to="/sobre-mi">Sobre Mi</Link>
           
          </li>
          <li className='nav-item p-4'>
          <Link to="/tecnologias">Tecnologías</Link>
           
          </li>
          <li className='nav-item p-4'>
          <Link to="/proyectos">Proyectos</Link>
            
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
