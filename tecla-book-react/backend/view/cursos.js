const userController = require("../controller/cursos.js");



module.exports = (app) => {
    app.post("/course", async (req, res)=> {
        //console.log('/course/req.body', req.body)
        let course = req.body
        let result = await userController.addUser(course)
        res.send(result)
    })

}
