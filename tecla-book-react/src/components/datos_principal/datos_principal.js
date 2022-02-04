import "./datos_principal.css"
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/localStorage";

function DatosPrincipal () {
  return (
    <div className="container">
    <div className="row contenido">
    <div className="col-5">
      <div className="card informacion">
        <div className="card-header">
          Información
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Estudió en la UNAM</li>
          <li className="list-group-item">Ingeniero en sistemas</li>
          <li className="list-group-item">Vive en Coyoacán</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export {DatosPrincipal};