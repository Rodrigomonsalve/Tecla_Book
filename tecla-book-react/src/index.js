import React from 'react';
import ReactDOM from 'react-dom';
//import {global} from './global/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/login/login.js';
//import {Menu} from './components/menu/menu.js';
//import {Photographie} from './components/photographie/photographie.js';
//import {Publicar} from './components/publicar/publicar.js';
//import {Menu} from './components/register/register.js';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
     <Route path="/login" element={<Login />} />    
     </Routes>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);