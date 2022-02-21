const sql = require ("../conection/db.js")

module.exports.searchUser = async (friendsData) => {
    let response = await sql.query(`SELECT id, correo, nombre FROM
    usuarios WHERE nombre LIKE '%${friendsData.nombre}%'AND correo!='${friendsData.mail}'`);

    let searchResult = await response[0];
    console.log("HOLA", searchResult)
    return searchResult
    
};