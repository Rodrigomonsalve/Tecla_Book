import { Publicar } from "../components/publicar/publicar.js";
import {DatosPrincipal} from "../components/datos_principal/datos_principal.js"
import {Photographie} from "../components/photographie/photographie.js"

function Home () {
    return (
    <div>
      <Photographie></Photographie>
      <DatosPrincipal>
      
      </DatosPrincipal>

      <Publicar></Publicar>
      
      </div>
        
        
        
    )
};

export {Home};