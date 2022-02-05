const modeData = require ("../model/mydata.js")

module.exports.contrData1 = async () => {
    return await modeData.dataRequest();
}