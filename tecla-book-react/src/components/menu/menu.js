import "./menu.css"
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {Amigos} from "../search/search.js"


function Menu() {

return (
<div>
    <nav className = "navbar navbar-expand-lg navbar-light barra1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TeclaBook</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                <NavLink className="linkAmigos" to="/"> 
                  Inicio
                </NavLink>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/search">Fotos</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active" id="navbarDropdown"role="button" aria-expanded="false">
                  <NavLink className="linkAmigos" to="/search"> 
                  Encuentra teclers
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Códigos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      )
      };

      export {Menu};