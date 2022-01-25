import "./index2.css"



function Register() {

    
    return(
        <div>
        <header>TeclaBook</header>
        <h1>Ingresa los siguientes datos, para formar parte de esta gran comunidad:</h1>
		<form className="formulario " id="formulariox">
			<div className="formulario__grupo" id="grupo__usuario">
				<label for="usuario" className="formulario__label">Usuario</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="usuario" id="usuario1" placeholder="john123"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div className="formulario" id="formulario">
				<label for="nombre" className="formulario__label">Nombre</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="nombre" id="nombre1" placeholder="John Doe"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__password">
				<label for="password" className="formulario__label">Contraseña</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password" id="contraseña1"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__password2">
				<label for="password2" className="formulario__label">Repetir Contraseña</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password2" id="contraseña2"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__correo">
				<label for="correo" className="formulario__label">Correo Electrónico</label>
				<div className="formulario__grupo-input">
					<input type="email" className="formulario__input" name="correo" id="correo1" placeholder="correo@correo.com"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El correo sólo puede contener letras, numeros, puntos, guiones y guión bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__telefono">
				<label for="telefono" className="formulario__label">Teléfono</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="telefono" id="telefono1" placeholder="4491234567"></input>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El teléfono sólo puede contener números y el máximo son 14 dígitos.</p>
			</div>

            <div className="formulario__grupo" id="grupo__telefono">
				<label for="disponibilidad para trabajar" className="formulario__label">Disponibilidad para trabajar</label>
				<div className="formulario__grupo-input">
					<input type="radio" className="formulario__checkbox" name="telefono" id="tiempo_completo"></input>
                    <lable for="tiempo_completo" className="formulario__checkbox">Tiempo completo</lable>
                    <input type="radio" className="formulario__checkbox" name="telefono" id="medio_tiempo"></input>
                    <lable for="tiempo_completo" className="formulario__checkbox">Medio tiempo</lable>
                    <input type="radio" className="formulario__checkbox" name="telefono" id="freelance"></input>
                    <lable for="freelance" className="formulario__checkbox">Freelance</lable>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El teléfono sólo puede contener números y el máximo son 14 dígitos.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__terminos">
				<label className="formulario__label">
					<input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos"></input>
					Acepto los Terminos y Condiciones
				</label>
			</div>
				<button type='submit' className="btn-enviar">Registrarme</button>
			<a href="index.html">
				<p>Ya tengo una cuenta</p>
			</a>
		</form>
	
	<footer>
	<p>Tecla Academy. Todos los derechos reservados®, 2021.</p>
	</footer>
</div>
    )
}

export {Register};