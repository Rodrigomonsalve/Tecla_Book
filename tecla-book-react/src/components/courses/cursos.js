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
      <nav className="navbar navbar-expand-lg navbar-blue sticky-top ">
         <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="fas fa-bolt green"></i> TeclaBook</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                           <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>


      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-2">
               <div className="card gray" >
                  <div className="card-body">
                     <h5 className="card-title">New Feeds</h5>
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons blue-back">
                                 <i className="fas fa-tv "></i>                              
                              </div>
                              <a className="gray">NewsFeed</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons orange-back">
                                 <i className="fas fa-medal"></i>
                              </div>
                              <a className="gray">Badges</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons yellow-back">
                                 <i className="fas fa-globe-americas"></i>
                              </div>
                              <a className="gray">Explore</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="card gray" >
                  <div className="card-body">
                     <h5 className="card-title">Account</h5>
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-tv "></i>                              
                              </div>
                              <a className="gray">Settings</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-medal"></i>
                              </div>
                              <a className="gray">Analitics</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-globe-americas"></i>
                              </div>
                              <a className="gray">Chat</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            
            <div className="col-lg-10">
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
                    <button type="submit" className="btn btn-primary">Guardar</button>
                  </form>
            </div>


         </div>
      </div>
      </div>
   

   )
}

export {Cursos}