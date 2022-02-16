const sequelize = require ("../conection/db.js");

module.exports.list = async () => {
    let result = await sequelize.query("SELECT * FROM usuarios")
    let prueba = result[0];
    return prueba;
}

module.exports.add = async(user) => {
    await sequelize.query(`INSERT INTO usuarios (usuario, nombre, contraseña, correo, teléfono, disponibilidad) 
    VALUES ('${user.usuario}', '${user.nombre}', '${user.contraseña}', '${user.correo}', '${user.teléfono}', '${user.disponibilidad}')`)
}

module.exports.find = async (id) => {
let result = await sequelize.query(`SELECT usuario, nombre, correo, teléfono, disponibilidad FROM usuarios WHERE id="${id}"`)
console.log("PRUEBA ID", result);
return result;
}