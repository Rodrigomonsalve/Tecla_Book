const userModels = require("../model/user_login.js")
const jwt = require ("jsonwebtoken")
//const { Model } = require("sequelize/dist")

module.exports.loginUser = async (userData) => {
    let responses = await userModels.login(userData)
    if(responses.login){
        return {token:await jwt.sign(responses.data, "Alojamora")}
    }

    return {error:"Usuario y contraseña incorrectos"}

} 