const sequelize = require ("../conection/db.js");

module.exports.listCourse = async () => {
    let result = await sequelize.query("SELECT * FROM cursos")
    let prueba = result[0];
    return prueba;
}

module.exports.addCourse = async(course) => {
    await sequelize.query(`INSERT INTO cursos (correo1, nombre, lugar, fecha) 
    VALUES ('${course.key}', '${course.name}', '${course.place}', '${course.date}')`)
}
