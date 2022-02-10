import { Publicar } from "../components/publicar/publicar.js";
import {Photographie} from "../components/photographie/photographie.js"
import {useLocalStorage} from "../hooks/localStorage.js"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {DatosPrincipal} from "../components/datos_principal/datos_principal"
import {YourPhotographie} from "../components/see_friends/photographie_friend.js"
import {useParams} from "react-router"


function YourHome () {
  const [token]= useLocalStorage("TOKEN",null)  
  const [user, setUser] = useState(undefined)
 const navigate = useNavigate();

 const {id} = useParams()
 useEffect (() => fetch (`http://localhost:3001/user?id=${id}`)
 .then(res=>res.json())
 .then(res=>setUser(res))
 ,[id])

 useEffect(() => {
   if(!token) {
    navigate("/")
  }
}, [token]);

    return (
    <div>
      <YourPhotographie></YourPhotographie>
      <DatosPrincipal data={user}>
      
      </DatosPrincipal>

      
      
      </div>

      )

    }
        
        
        
    

export {YourHome};