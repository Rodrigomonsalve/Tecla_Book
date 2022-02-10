import "./menu.css"
import { useState, useEffect } from 'react';
import { NavLink, useNavigate} from "react-router-dom";
import {Amigos} from "../search/search.js"
import { useLocalStorage } from "../../hooks/localStorage";

function Menu() {

const [token, saveToken]=useLocalStorage("TOKEN", null)  
//let navigate = useNavigate();


return (
<div>
    <nav className = "navbar navbar-expand-lg navbar-light barra1">
        <div className="container-fluid ">
          <a className="navbar-brand marca">TeclaBook</a>
          <div className="navbar-collapse" id="navbarSupportedContent">
            {token && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="linkAmigos" to="/courses"> 
                Añade cursos 
                </NavLink>
              </li>
            
              <li className="nav-item">
              <NavLink className="linkAmigos" to="/search"> 
                Teclers
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                  <NavLink className="linkAmigos" to="/principal"> 
                  Perfil
                  </NavLink>
              </li>
              <li className="nav-item"><a className="linkAmigos" href=""
              onClick={()=> 
                saveToken(null)
                //navigate("/")
              }>Cerrar sesión</a>              
              </li>
              
            </ul>)
            }
            {!token && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="linkAmigos" to="/"> 
              Iniciar sesión 
              </NavLink>
            </li>
            </ul>)
            }
          </div>
        </div>
      </nav>
      </div>
)
}

      export {Menu};