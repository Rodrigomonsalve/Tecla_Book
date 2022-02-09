const contrData = require("../controller/myData.js")

// module.exports = (app) => {

//     app.get("/data", async (req,res) => {
//     let userData = req.body    
//     let viewData = contrData.contrData1(userData)
//     console.log(viewData)
//     res.json(viewData)
// } )

// }

module.exports = (app) => {
    
    app.post("/data", async (req, res) => {
        try {
        let result = await contrData.contrData1(req.body)
        console.log(req.body)
        res.json(result)
        }
        catch(error) {
            console.log(error)
        }
    })
};