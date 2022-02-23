const photosController = require("../controller/fotos.js")




module.exports = (app) => {
app.post("/photos", async (req, res)=> {
    console.log("Foto:", userPhoto)
    let userPhoto = req.body
    let results = await photosController.showPhotos(userPhoto)
    res.send(results)
})

}

