const courseController = require("../controller/cursos.js");

module.exports = (app) => {
    app.get("/course", async (req, res) => {
        let result = await courseController.listCourses
        ();
        res.json(result)
    })



    app.post("/course", async (req, res)=> {
        //console.log('/course/req.body', req.body)
        let course = req.body
        let result = await courseController.addCourses(course)
        res.send(result)
    })

}
