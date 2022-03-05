const userModel = require ("../model/user.js");

module.exports.listUsers = async () => {
    let result = await userModel.list()
    return result;
}

module.exports.addUser = async (user) => {
    await userModel.add(user)
    console.log("usuario registrado", user)
    return "Usuario registrado"
}

module.exports.foundTecler = async (id) => {
    let result = await userModel.find(id)
    return result;
}
 



