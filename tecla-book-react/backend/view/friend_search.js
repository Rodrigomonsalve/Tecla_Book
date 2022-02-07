const friendController = require ("../controller/friend_search.js")
const auth = require ("../midd/middleware.js")

module.exports = (app) => {
    
    app.post("/search", auth.authenticate, async (req, res) => {
        try {
        let result = await friendController.searchFriend(req.body)
        console.log(req.body)
        res.json(result)
        }
        catch(error) {
            console.log(error)
        }
    })
};