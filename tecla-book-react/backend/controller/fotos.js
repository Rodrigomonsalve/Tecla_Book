const photosModel = require ("../model/fotos.js")

module.exports.showPhotos = async (photo) => {
    let results = await photosModel.bringPhotos(photo)
    return results;
}
 