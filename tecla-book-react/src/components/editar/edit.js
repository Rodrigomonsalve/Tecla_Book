import "./edit.css"
import {apiRegister} from "../../api/fetch.js";
import { Navigate, useNavigate } from "react-router";




function Edit() {
	const navigate = useNavigate()

	
	
	const register = async (event) => {
		console.log(event.target.value[0])
		event.preventDefault()
		
		let newRegister = {
			usuario:event.target[0].value,
			nombre:event.target[1].value,
			contraseña:event.target[3].value,
			correo:event.target[4].value,
			teléfono:event.target[5].value,
			disponibilidad:event.target[7].value,
			foto:event.target[8].value,
			fondo:event.target[9].value
		}
		
		let datosEnviados = await apiRegister (newRegister)
		console.log(datosEnviados)

		if (datosEnviados) {
			window.alert ("¡Felicidades! Ya formas parte de esta gran comunidad")
			navigate("/") 
		}
		
		else {
			window.alert("Datos no válidos")
			console.log("Datos no válidos")
		}

		
	}
    
    return(
        <div>
        <h1>Eige los campos que desees editar:</h1>
		<div className="formulario_registro">
		<form className="formulario " id="formulariox" onSubmit={register}>
			<div className="formulario__grupo" id="grupo__usuario">
				<label htmlFor="usuario" className="formulario__label">Nombre de usuario:</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="usuario" id="usuario1" placeholder="john123"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div className="formulario" id="formulario">
				<label htmlFor="nombre" className="formulario__label">Nombre completo:</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="nombre" id="nombre1" placeholder="John Doe"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__password">
				<label htmlFor="password" className="formulario__label">Nueva contraseña:</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password" id="contraseña1"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__password2">
				<label htmlFor="password2" className="formulario__label">Repetir nueva contraseña</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password2" id="contraseña2"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__correo">
				<label htmlFor="correo" className="formulario__label">Correo electrónico registrado:</label>
				<div className="formulario__grupo-input">
					<input type="email" className="formulario__input" name="correo" id="correo1" placeholder="correo@correo.com"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El correo sólo puede contener letras, numeros, puntos, guiones y guión bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__telefono">
				<label htmlFor="telefono" className="formulario__label">Teléfono:</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="telefono" id="telefono1" placeholder="4491234567"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El teléfono sólo puede contener números y el máximo son 14 dígitos.</p>
			</div>

            <div className="formulario__grupo" id="grupo__telefono">
				<label htmlFor="disponibilidad para trabajar" className="formulario__label">Disponibilidad para trabajar:</label>
				<div className="formulario__grupo-input" required>
					<input type="radio" className="formulario__checkbox" name="telefono" id="tiempo_completo"></input>
                    <label htmlFor="tiempo_completo" className="formulario__checkbox">Tiempo completo</label>
                    <input type="radio" className="formulario__checkbox" name="telefono" id="medio_tiempo"></input>
                    <label htmlFor="tiempo_completo" className="formulario__checkbox">Medio tiempo</label>
                    <input type="radio" className="formulario__checkbox" name="telefono" id="freelance"></input>
                    <label htmlFor="freelance" className="formulario__checkbox">Freelance</label>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error"></p>
			</div>

			<div className="formulario__grupo" id="grupo__foto_perfil">
				<label htmlFor="foto_perfil" className="formulario__label">Foto de perfil:</label>
				<div className="formulario__grupo-input">
					<input type="file" className="formulario__input" name="telefono" id="foto_perfil" placeholder="Lo puedes hacer posteriormente"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">.</p>
			</div>

			<div className="formulario__grupo" id="grupo__foto_fondo">
				<label htmlFor="foto_fondo" className="formulario__label">Imagen de fondo:</label>
				<div className="formulario__grupo-input">
					<input type="file" className="formulario__input" name="telefono" id="foto_fondo" placeholder="Lo puedes hacer posteriormente"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error"></p>
			</div>

			
		
				<button type='submit' className="btn-enviar">Modificar datos</button>
		</form>
		</div>
	
	<footer>
	<p>Tecla Academy. Todos los derechos reservados®, 2021.</p>
	</footer>
</div>
    )
}

export {Edit};