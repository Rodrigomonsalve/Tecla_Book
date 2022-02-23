const sequelize = require ("../conection/db.js");

module.exports.bringPhotos = async (photos) => {
    let results = await sequelize.query(`SELECT fotografia, fondo FROM usuarios WHERE correo=${photos}`)
    console.log("PRUEBA ID", results);
    return results;
    }