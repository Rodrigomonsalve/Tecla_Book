import "./yourdata.css"
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState} from "react";
import {dataApi} from "../../api/fetch_misdatos"

  
function YourDatosPrincipal () {

  const [information1, setInformation1] = useState([]);
  const [user] = useLocalStorage("USER", {});
  console.log(user)

  const data = async () => {
    
    let dataCollected = await dataApi(user)
    console.log(dataCollected)
    setInformation1(dataCollected);
    }
  
  return (
    <div className="container">
    <div className="row contenido">
    <div className="col-5">
      {information1.map((n) => 
      <div className="card informacion">
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

      <button onClick={data}>Pruebame</button>
    </div>
    </div>
    </div>
  )
}

export {YourDatosPrincipal};