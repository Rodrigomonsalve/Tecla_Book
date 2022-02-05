import "./datos_principal.css"
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState} from "react";
import {dataApi} from "../../api/fetch_misdatos"

  
function DatosPrincipal () {

  const [information1, setInformation1] = useState([]);

  const data = async () => {
    let dataCollected = await dataApi()
    console.log(dataCollected)
    setInformation1(dataCollected);
    }
  
  return (
    <div className="container">
    <div className="row contenido">
    <div className="col-5">
      {information1.map((n) => 
      <div className="card informacion" onLoad={data}>
        <div className="card-header">
          Mi información:
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{n.correo}</li>
          <li className="list-group-item">{n.teléfono}</li>
          <li className="list-group-item">{n.disponibilidad}</li>
        </ul>
        
      </div>
      )
      }
    </div>
    </div>
    </div>
  )
}

export {DatosPrincipal};