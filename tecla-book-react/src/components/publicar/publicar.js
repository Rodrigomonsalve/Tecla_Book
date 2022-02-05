import "./principal.css";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState } from "react";

function Publicar () {
    
    return (
   

    <div className="container general">
      <form className="row">
        <div className="col-12 formato_publicar">
          <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
          <div className="input-group">
            <div className="input-group-text"></div>
            <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Cuéntanos ¿qué piensas codear el día de hoy?"
                      required
                    ></textarea>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary boton_publicar">Publicar</button>
        </div>
      </form>
    </div>

    )
}

export {Publicar};
