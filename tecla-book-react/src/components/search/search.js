import {React, useEffect, useState} from "react";
import "./search.css";
import {apiFriends} from "../../api/fetch_amigos.js"
import {useLocalStorage} from "../../hooks/localStorage.js"
import {useNavigate} from "react-router-dom"

function Amigos() {

    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    const [listTeclers, setListeclers] = useState([]);
    const [token] = useLocalStorage("TOKEN", {});
  
    const navigate = useNavigate();


    useEffect(() => {
      if(!token) {
       navigate("/")
     }
   }, []);
    
    
    const buscar = async (event) => {
        
        console.log(event.target.value)
  
        let nombreIngresado = {
            nombre:event.target.value
        }

        console.log(nombreIngresado)
        const result = await apiFriends(nombreIngresado, token)
        console.log(result)
        setListeclers(result)
        
        
}



     return (
        <div>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Encuentra más teclers</a>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Buscar teclers" onChange={buscar}/> 
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </nav>
        {listTeclers[0] && listTeclers.map((n)=> 
        <div className="card gray tarjeta1">
        <img src="https://ps.w.org/simple-user-avatar/assets/icon-128x128.png?rev=2413146" className="card-img-top"></img>
        <div className="card-body tarjeta">
        
        <p className="card-text">{n.nombre}</p>
        <p className="card-text">{n.correo}</p>
        <a href="#" className="btn btn-success">Agregar tecler</a>
        </div>
        </div>
        )}
        </div>
        

     )

    }




export {Amigos};