import {React, useEffect, useState} from "react";
import "./search.css";
import {apiFriends} from "../../api/fetch_amigos.js"
import {useLocalStorage} from "../../hooks/localStorage.js"
import {useNavigate} from "react-router-dom"


function Amigos(props) {

    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    const [listTeclers, setListeclers] = useState([]);
    const [token] = useLocalStorage("TOKEN", null);
    const [tecler, setTecler] = useState ("");
    const [user]= useLocalStorage("USER",{})

    console.log(user.correo)
  
    const navigate = useNavigate();


        useEffect(() => {
          if(!token) {
            navigate("/")
          }
        }, [token]);

    
    
    const buscar = async (event) => {
        
        console.log(event.target.value)
  
        let nombreIngresado = {
            nombre:event.target.value,
            mail: user.correo
        }

        console.log(nombreIngresado)
        const result = await apiFriends(nombreIngresado, token)
        console.log(result)
        setListeclers(result)
}

    const verTecler = async ()=>{
        setTecler(listTeclers.map)
        console.log(listTeclers)
        //console.log(listTeclers.map)
        console.log(tecler)
    }

      return (
        <div>
        <nav className="navbar navbar-light bg-light barrita-buscadora">
        <a className="navbar-brand">Encuentra más teclers</a>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Buscar teclers" onChange={buscar}/> 
        </form>
      </nav>
        {listTeclers[0] && listTeclers.map((n)=> 
        <div className="tarjeta_user">
        <div className="card gray tarjeta2">
          <div className="imagen_tarjeta">
        <img src="https://ps.w.org/simple-user-avatar/assets/icon-128x128.png?rev=2413146" className="card-img-top foto-usuario"></img>
        </div>
        <div className="card-body tarjeta_datos">
        
        <p className="card-text texto-tecler">{n.nombre}</p>
        <p className="card-text texto-tecler">{n.correo}</p>
        <a href="#" className="btn btn-success boton-buscar">Agregar tecler</a>
        <a href={`/friend/${n.id}`} className="btn btn-success boton-buscar" onClick={verTecler}>Ver tecler</a>
        </div>
        </div>
        </div>
        )}
        </div>
        

     )

    }




export {Amigos};