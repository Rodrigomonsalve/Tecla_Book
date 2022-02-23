import React from 'react';
import ReactDOM from 'react-dom';
//import {global} from './global/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/login/login.js';
//import {Menu} from './components/menu/menu.js';
//import {Photographie} from './components/photographie/photographie.js';
//import {Publicar} from './components/publicar/publicar.js';
import {Menu} from './components/menu/menu.js';
//import { publicar } from './components/publicar/publicar.js';
import {Register} from './components/register/register.js';
import {Amigos} from './components/search/search.js';
import {Publicar} from './components/publicar/publicar.js';
import {Home} from './pages/principal';
import { NotFound } from './pages/404.js';
import { Cursos } from './components/courses/cursos.js';
import { YourHome } from './pages/yourdata.js';
import { Edit } from './components/editar/edit.js';

ReactDOM.render(
  <BrowserRouter>
  <Menu/>
    <Routes>
    <Route path="/" element={<Login />} />
     <Route path="/register" element={<Register />} /> 
     <Route path="/search" element={<Amigos/>} />  
     <Route path="/publish" element={<Publicar/>} />
     <Route path="/principal" element={<Home/>}/>
     <Route path="/*" element={<NotFound/>}/>
     <Route path="/courses" element={<Cursos/>}/>
     <Route path="/friend/:id" element = {<YourHome/>}/>
     <Route path="/edit" element = {<Edit/>}/>
     </Routes>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);