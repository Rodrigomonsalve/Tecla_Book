const sql = require ("../conection/db.js")

module.exports.searchUser = async (friendsData) => {
    let response = await sql.query(`SELECT correo, nombre FROM
    usuarios WHERE nombre LIKE '%${friendsData.nombre}%'`);

    let searchResult = await response[0];
    console.log(searchResult)
    return searchResult
    
};