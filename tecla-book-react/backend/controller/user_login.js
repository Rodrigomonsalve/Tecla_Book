const userModels = require("../model/user.js")
const jwt = require ("jsonwebtoken")
//const { Model } = require("sequelize/dist")

module.exports.loginUser = async (userData) => {
    let responses = await userModels.login(userData)
    if(responses.login){
        return {token:await jwt.sign(response.data, "Alojamora")}
    }

    return {error:"Usuario y contraseña incorrectos"}

} 