import "./datos_principal.css"
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import { useState} from "react";
import {dataApi} from "../../api/fetch_misdatos"


  
function DatosPrincipal ({da}) {
  //const {da} = props;
  const [profile, setProfile] = useState({});
  const [user] = useLocalStorage("USER", {});
  
  
  const getData = async (date) => {
    if (date) {
      console.log("getData", date)
      setProfile(date)
    } else {
      setProfile(await dataApi(user))
      // const data = async () => {
      //   let dataCollected = await dataApi(user)
      //   console.log(dataCollected)
      //   setProfile(dataCollected);
      //}
    }
  }

  useEffect (()=>{
    
  getData(da);

  }, [da, user])


  return (
    
    <div className="contenedor_datos ">
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
    
  )
}

export {DatosPrincipal};