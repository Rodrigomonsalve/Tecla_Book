import "./photographie.css"
import { useEffect, useState } from "react"
import { useLocalStorage } from "../../hooks/localStorage"
import {apiPhoto} from "../../api/fetch_fotos.js"



function Photographie(){

const [user] = useLocalStorage("USER", {});
const [foto, setFoto]=useState({});

const getPhoto = async () => {
    let userPhoto = user.correo
    //console.log(userPhoto)
    let bringPhoto = await apiPhoto(userPhoto)
    //console.log(bringPhoto)
    setFoto(bringPhoto)
    console.log(foto)

}

useEffect (() => {
  getPhoto ();
}, [])

    return (
        <div>
        <div className="row">
          <div className="col-12 cabecera">
            <div className="col-12">
            <img src="http://localhost:3001/photos/javascript.png" className="imagen_fondo"></img>
          </div>
          <div className="row"> 
          <div className="col-6">
            <img src="http://localhost:3001/photos/rodrigo.jpg" className="imagen_usuario"></img>
          </div>
          <div className="col-6">
          <a href="/edit">
            <button type="button" className="btn btn-primary btn-sm boton_amigo">Editar perfil</button>
            </a>
          </div>
        </div> 
            <div className="col-12">
              <nav className="nav navegador">
                <a className="nav-link active texto-navegador" aria-current="page" href="#">Publicaciones</a>
                <a className="nav-link texto-navegador" href="#">Códigos</a>
                <a className="nav-link texto-navegador" href="#">Fotos</a>
                <a className="nav-link texto-navegador">Información</a>
              </nav>
            </div>
          </div>


        </div>
      </div>
    )

}

export {Photographie};