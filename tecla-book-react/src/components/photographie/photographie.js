import "./photographie.css"
import { useEffect, useState } from "react"
import { useLocalStorage } from "../../hooks/localStorage"
import {apiPhoto} from "../../api/fetch_fotos.js"



function Photographie(){

const [user] = useLocalStorage("USER", {});
const [foto1, setFoto1]=useState({});
const [foto2, setFoto2] = useState ({});

const getPhoto = async () => {
    let userPhoto = user.correo
    let objetctPhoto = {
      correo: userPhoto
    }
    console.log(objetctPhoto)
    let bringPhoto = await apiPhoto(objetctPhoto)
    console.log(bringPhoto)
    setFoto1(bringPhoto.fotografia)
    setFoto2(bringPhoto.fondo)
   

}

console.log(foto1)
console.log(foto2)

useEffect (() => {
  getPhoto ();
}, [])

    return (
        <div>
        <div className="row contendeor_cabecera">
          <div className="col-12 cabecera">
            <div className="col-12 contenedor_imagen_fondo">
            <img src="http://localhost:3001/photos/javascript.png" className="imagen_fondo"></img>
          </div>
          <div className="row"> 
          <div className="col-6 contenedor_imagen_perfil">
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