const userController1 = require ("../controller/user.js");
const expect = require("chai").expect;

describe("Prueba de usuario", () => {

    describe("Checked usuario", ()=>{
        it("Checked usuario", async () => {
            let result = await userController1.addUser({
                usuario: 'Rodrigo',
                nombre: 'Rodrigomonsalve',
                'contraseña': '12345',
                correo: 'rosariorizo08@gmail.com',
                'teléfono': '378390783',
                disponibilidad: 'on',
                foto: 'on',
                fondo: ''
              })
            expect(result).to.equal("Usuario registrado");
        })
    })
})