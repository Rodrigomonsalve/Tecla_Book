import "./photographie_friend.css"
import { useEffect } from "react"
import { useLocalStorage } from "../../hooks/localStorage"

function YourPhotographie(){
    return (
        <div>
        <div className="row">
          <div className="col-12 cabecera">
            <div className="col-12">
            <img src="imagenes/fondo.png" className="imagen_fondo"></img>
          </div>
          <div className="row"> 
          <div className="col-6">
            <img src="imagenes/usuario.jpg" className="imagen_usuario"></img>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-primary btn-sm boton_amigo">Añadir tecler</button>
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

export {YourPhotographie};