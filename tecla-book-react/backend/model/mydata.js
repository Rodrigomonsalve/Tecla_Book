const dataBase = require ("../conection/db.js")

// module.exports.dataRequest = async (userData) => {
//     let dataResult = await dataBase.query(`SELECT correo, teléfono, disponibilidad FROM usuarios WHERE correo="${userData.correo}"`)
//     let dataResponse = await dataResult;
//     console.log(dataResponse)
//     return (dataResponse);
// }

module.exports.dataRequest = async (userData) => {
    let dataResult = await dataBase.query(`SELECT correo, teléfono, disponibilidad FROM usuarios WHERE correo="${userData.correo}"`);
    let dataResponse = await dataResult[0];
    console.log("HOLA", dataResponse)
    return dataResponse
    
};