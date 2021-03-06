import "./login.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {apiLogin} from '../../api/fetch_ingreso.js';
import { useLocalStorage } from "../../hooks/localStorage.js";

function Login() {

    const navigate = useNavigate()

    //const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    const [user, saveUser]= useLocalStorage("USER",{})  
    const [token, saveToken]= useLocalStorage("TOKEN",null)

    console.log(error)


    const login = async (event) =>{
        event.preventDefault()
        let newLogin = {
            correo: event.target[0].value,
            contraseña: event.target[1].value
        }
        //setLoading(true)

        let loginResult = await apiLogin(newLogin)
        console.log(loginResult)
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
                    //localStorage.setItem("TOKEN", loginResult.token)
                  
                    let data = loginResult.token.split(".")
                    let userData = window.atob(data[1])
                    //localStorage.setItem("USERDATA", userData)
                    saveToken({token: loginResult.token})
                    saveUser(userData)
                    console.log(loginResult)
                    console.log(loginResult.token)
                    console.log(userData)
                    navigate("/principal")

            }

        }
    }

    return ( 
      
 <div>     
    {error.error && (
      <div className="alerta_contr">
    <div className="alert alert-danger alerta-div" role="alert">
          <p className="alerta">¡Correo o contraseña incorrectos!</p>
    </div>
    </div>
    )
    }
    <div className="caja_formulario">
    <form className="formulario1" onSubmit={login}>
        <p className="invitacion">Iniciar sesión en TeclaBook</p>
        <div className="caja_inputs">
        <div className="row mb-2">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Correo:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control input1" id="correo2"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Contraseña:</label>
          <div className="col-sm-10">
            <input type="password" className="form-control input2" id="contraseña3"></input>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary boton2">Iniciar sesión</button>
        </div>
      </form>
      
      </div>
      <a href="http://localhost:3000/register">
        <p className="registro1">¿Es la primera vez que usas TeclaBook? Regístrate.</p>
      </a>
      
    
<footer>Tecla Academy. Todos los Derechos Reservados® 2021.</footer>
</div>

     );
}

export {Login};
