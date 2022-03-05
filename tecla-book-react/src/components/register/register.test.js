import "@testing-library/jest-dom/extend-expect";
import {render, prettyDOM} from "@testing-library/react";
import { Register } from "./register";

test ("Prueba de registro", ()=> {
    const usuarioRegistrado = {
        
            usuario: 'Rodrigo',
            nombre: 'Javier',
            'contraseña': '0123',
            correo: 'rodrigoderecho1@gmail.com',
            'teléfono': '7837893',
            disponibilidad: 'on',
            foto: 'on',
            fondo: ''
          
    };

    const component = render(<Register></Register>)
    
})