const userController = require("../controller/user.js");
//const auth = require ("../midd/middleware")


module.exports = (app) => {
    app.get("/user", async (req, res) => {
        let result = await userController.listUsers
        ();
        res.json(result)
    })

    app.post("/user", async (req, res)=> {
        console.log('/user/req.body', req.body)
        let user = req.body
        let result = await userController.addUser(user)
        res.send(result)
    })

}
