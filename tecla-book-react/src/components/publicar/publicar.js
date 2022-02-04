import "./principal.css";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState } from "react";

function Publicar () {
    
    return (
   

    <div className="container general">
      <form className="row">
        <div className="col-12 formato_publicar">
          <label className="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
          <div className="input-group">
            <div className="input-group-text"></div>
            <input type="textarea" className="form-control espacio_publicar" id="specificSizeInputGroupUsername" placeholder="¿Qué piensas codear el día de hoy?"></input>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" class="btn btn-primary boton_publicar">Publicar</button>
        </div>
      </form>
    </div>

    )
}

export {Publicar};
