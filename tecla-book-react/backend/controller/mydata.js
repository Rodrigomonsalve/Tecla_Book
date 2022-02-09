const modeData = require ("../model/mydata.js")

// module.exports.contrData1 = async (userData) => {
//     return await modeData.dataRequest(userData);
// }

module.exports.contrData1 = async (userData) => {
    let foundData = await modeData.dataRequest(userData)
    return (foundData);

}