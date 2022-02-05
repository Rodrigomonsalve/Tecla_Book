const contrData = require("../controller/myData.js")

module.exports = (app) => {

app.get("/data", async (req,res) => {
    let viewData = contrData.contrData1()
    res.send({viewData})
} )

}