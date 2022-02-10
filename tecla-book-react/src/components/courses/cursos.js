import "./cursos.css"
import {useState, useEffect} from "react";
import {apiCourse} from "../../api/fetch_cursos.js"
import { useLocalStorage } from "../../hooks/localStorage.js";
import {useNavigate} from "react-router-dom"



function Cursos () {

    const [user] = useLocalStorage("USER", {})
    const [token] = useLocalStorage("TOKEN", null);
  
    const navigate = useNavigate();


        useEffect(() => {
          if(!token) {
            navigate("/")
          }
        }, [token]);
    
    //console.log(((((user.split(":")[1]).split(",")[0]).slice(2))).replace("\"", " "))
    const sendCourse = async (event) => {
        
        event.preventDefault()
        
        let newCourse = {
            key:(((((user.split(":")[1]).split(",")[0]).slice(2))).replace("\"", " ").replace("\\", "").trim()),
            name: event.target[0].value,
            place:event.target[1].value,
            date:event.target[2].value
        }
        console.log(newCourse)

     let sentCourse = await apiCourse (newCourse)   

    } 


return (

<div>
      

      <div className="container-fluid">
         <div className="row">
            
            
            <div className="col-lg-12">
                <p className="nuevoCurso">Nuevo curso</p>
                <form className="formatoCurso" onSubmit={sendCourse}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre del curso</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Lugar en donde se realizó</label>
                      <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fecha de comienzo y finalización</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                      </div>
                    <button type="submit" className="btn btn-primary boton-curso">Guardar</button>
                  </form>
            </div>


         </div>
      </div>
      </div>
   

   )
}

export {Cursos}