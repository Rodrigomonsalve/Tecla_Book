import { Publicar } from "../components/publicar/publicar.js";
import {DatosPrincipal} from "../components/datos_principal/datos_principal.js"
import {Photographie} from "../components/photographie/photographie.js"
import {useLocalStorage} from "../hooks/localStorage.js"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"


function Home () {
  const [token]= useLocalStorage("TOKEN",null)  
 const navigate = useNavigate();

 useEffect(() => {
   if(!token) {
    navigate("/")
  }
}, [token]);

    return (
    <div>
      <Photographie></Photographie>
      <DatosPrincipal>
      
      </DatosPrincipal>

      <Publicar></Publicar>
      
      </div>

      )

    }
        
        
        
    

export {Home};