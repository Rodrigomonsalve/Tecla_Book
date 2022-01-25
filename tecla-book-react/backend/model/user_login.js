const sql = require ("../conection/db.js")

module.exports.login = async (userData) => {
    let response = await sql.query(`SELECT correo, nombre FROM
    usuarios WHERE correo LIKE '${userData.correo}' AND contraseña=MD5('${userData.contraseña}')`)

    let loginResult = await response[0][0] ? true : false;

    let loginResponse = {
        login:loginResult,
        data:response[0][0] ? response[0][0] : false
    }

    return loginResponse
}