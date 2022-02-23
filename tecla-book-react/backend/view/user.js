const userController = require("../controller/user.js");
//const auth = require ("../midd/middleware")


module.exports = (app) => {
    app.get("/user", async (req, res) => {
        const {id} = req.query;
        console.log("req.query:", req.query)
        console.log("id del req.query:", id)
        let result = undefined
        if (id){
            result = await userController.foundTecler(id)
        } else {
            result = await userController.listUsers();
        }
        res.json(result)
    })


    app.post("/user", async (req, res)=> {
        //console.log('/user/req.body', req.body)
        let user = req.body
        let result = await userController.addUser(user)
        console.log("Prueba", result)
        res.send(result)
    })
    

}
