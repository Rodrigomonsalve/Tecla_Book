import "./datos_principal.css"
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState} from "react";
import {dataApi} from "../../api/fetch_misdatos"


  
function DatosPrincipal (props) {
  const {data} = props;
  const [profile, setProfile] = useState([]);
  const [user] = useLocalStorage("USER", {});
  console.log(user)

  useEffect (()=>{
    const getData = async () => {
    if (data) {
      Event.preventDefault()
      setProfile(data)
    } else {
      setProfile(await dataApi(user))
      // const data = async () => {
      //   let dataCollected = await dataApi(user)
      //   console.log(dataCollected)
      //   setProfile(dataCollected);
      //}
    }
  }

  getData();

  }, [data, user])


  return (
    <div className="container">
    <div className="row contenido">
    <div className="col-5">
      
      <div className="card informacion">
        <div className="card-header">
          Mi información:
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Correo: {profile.correo}</li>
          <li className="list-group-item">Teléfono: {profile.teléfono}</li>
          <li className="list-group-item">Disponibilidad: {profile.disponibilidad}</li>
        </ul>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export {DatosPrincipal};