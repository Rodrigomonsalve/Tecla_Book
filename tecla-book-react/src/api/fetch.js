function enviaUsuario () {
    const nuevoUsuario = {
        usuario:document.getElementById("usuario1").value,
        nombre:document.getElementById("nombre1").value,
        contraseña:document.getElementById("contraseña1").value,
        correo:document.getElementById("correo1").value,
        teléfono:document.getElementById("telefono1").value
}

const claves = Object.keys(nuevoUsuario)
let errors = []
for (let clave of claves) {
    if(nuevoUsuario[clave]===""){
        errors.push(clave)
    }
}

if(errors.length>0){
    alert(`Falta completar ${errors}`)
} 
else {
    console.log("nuevoUsuario", nuevoUsuario)
    fetch ("http://localhost:3001/user", {
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoUsuario)
    })
    .then(resp=>resp.json())
    .then(response=>{
        if(response.error){
            alert(response.error)
        }
        else{
            window.location="/index"
        }
    })

}}