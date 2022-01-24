import "./login.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {apiLogin} from '../../api/fetch_ingreso.js';
//import { useLocalStorage } from "../hooks/useLocalStorage";

function Login() {

    const navigate = useNavigate()

    //const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    //const [user, saveUser]= useLocalStorage("USER",{})  
    //const [token, saveToken]= useLocalStorage("TOKEN",{})


    const login = async (event) =>{
        event.preventDefault()
        let newLogin = {
            email: event.target[0].value,
            pass: event.target[1].value
        }
        //setLoading(true)

        let loginResult = await apiLogin(newLogin)
        if (loginResult) {
            //setLoading(false)

            if(loginResult.error){
                setError({
                    errorMessage:loginResult.error,
                    error:true})
            }

            if(loginResult.token){
                setError({...error,
                    error:false})
                    localStorage.setItem("TOKEN", loginResult.token)
                    //saveToken({token: loginResult.token})
                    let data = loginResult.token.split(".")
                    let userData = window.atob(data[1])
                    localStorage.setItem("USERDATA", userData)
                    //saveUser(userData)
                    navigate("/")

            }

        }
    }

    return ( 
<div>
        
        <form className="formulario1" onSubmit= {login}>
            <p className="invitacion">Iniciar sesión en TeclaBook</p>
            <div className="row mb-2">
              <p><label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Correo:</label></p>
              <div className="col-sm-10">
                <input type="email" className="form-control input1" id="correo2" required></input>
              </div>
            </div>
            <div className="row mb-3">
              <p><label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Contraseña:</label></p>
              <div className="col-sm-10">
                <input type="password" className="form-control input2" id="contraseña3" required></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary boton1">Iniciar sesión</button>
          </form>
          <a href="index2.html">
            <p className="registro1">¿Es la primera vez que usas TeclaBook? Regístrate.</p>
          </a>
</div>
     );
}

export {Login};
