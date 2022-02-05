const dataBase = require ("../conection/db.js")

module.exports.dataRequest = async () => {
    let dataResult = await dataBase.query("SELECT correo, teléfono, disponibilidad FROM usuarios WHERE correo={}")

    let dataResponse = await dataResult;
    return (dataResponse);
}

