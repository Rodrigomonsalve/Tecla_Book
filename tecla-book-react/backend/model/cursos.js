const sequelize = require ("../conection/db.js");


module.exports.addCourses = async(user) => {
    await sequelize.query(`INSERT INTO usuarios (usuario, nombre, contraseña, correo, teléfono, disponibilidad) 
    VALUES ('${user.usuario}', '${user.nombre}', '${user.contraseña}')`)
}
