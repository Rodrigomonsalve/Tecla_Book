const photosController = require("../controller/fotos.js")


module.exports = (app) => {
    app.post("/getPhotos", async (req, res) => {
        let userPhoto = req.body
        console.log("Foto:", userPhoto)
        let results = await photosController.showPhotos(userPhoto)
        res.send(results)
    })

}

