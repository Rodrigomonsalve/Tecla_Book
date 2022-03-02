const sequelize = require ("../conection/db.js");

module.exports.bringPhotos = async (photos) => {
    let results = await sequelize.query(`SELECT fotografia, fondo FROM usuarios WHERE correo='${photos.correo}'`)
    console.log("PRUEBA ID", results[0][0]);
    return results[0][0];
    }