import React from 'react';
import ReactDOM from 'react-dom';
//import {global} from './global/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/login/login.js';
//import {Menu} from './components/menu/menu.js';
//import {Photographie} from './components/photographie/photographie.js';
//import {Publicar} from './components/publicar/publicar.js';
import {Menu} from './components/menu/menu.js';
import {Register} from './components/register/register.js';
import {Amigos} from './components/search/search.js';



ReactDOM.render(
  <BrowserRouter>
  <Menu/>
    <Routes>
    <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} /> 
     <Route path="/search" element={<Amigos />} />     
     </Routes>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);