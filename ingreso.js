function login () {
let ingreso = async ()=>{
    const answer = await fetch ("http://localhost:3000/user");
    let jason = await answer.json();
    let saludo;

for (let i=0; i<jason.lengt; i++) {
    let user2 = jason[i].correo;
    let contraseña2= jason[i].contraseña;

    if (user2 == document.getElementById("correo2").value && contraseña2 == document.getElementById("contraseña3").value) {
        saludo = "¡Bienvenido!";
        window.location.href = "principal.html"
        }

    else {
        saludo ="Tu correo o contraseña o ambos son incorrectos"

    }
    }

    alert(saludo);
}
};