const userModel = require ("../model/user.js");

module.exports.listUsers = async () => {
    let result = await userModel.list()
    return result;
}

module.exports.addUser = async (user) => {
    await userModel.add(user)
    return "Usuario registrado"

}
 



