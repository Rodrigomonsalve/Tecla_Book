import "./principal.css";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState } from "react";

function Publicar () {

const [publish, setPublish]=useState([]); 

 


const comment = (event) => {
  event.preventDefault()
  let commentObject = {
    id:publish.lenght + 1,
    body:event.target[0].value
  }

  console.log(commentObject)
  
  setPublish([...publish, commentObject]);

}   

const erase = () => {
  setPublish([]);
}
    return (
   

    <div className="container general">
      <div className = "row">
      <form className="col-6" onSubmit={comment}>
        <div className="formato_publicar">
          <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
          <div className="input-group">
            <div className="input-group-text"></div>
            
                    { <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Cuéntanos ¿qué piensas codear el día de hoy?"
                      required
                    ></textarea>}
          </div>
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary boton_publicar">Publicar</button>
        </div>
      </form>
       
      {publish.map(n => (        
      <form>
      <div key={n.id} className="row">
      <div className="col-12 card tarjeta">
        <div className="card-body tarjeta1">
          <p className="card-text">{n.body}</p>
          </div>
          <button type="button" onClick={erase}>Borrar</button>
           
  </div>
</div>
</form>
      ))}
</div>
  
</div>

    )
}

export {Publicar};
