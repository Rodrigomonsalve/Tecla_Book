const friendController = require ("../controller/friend_search.js")

module.exports = (app) => {
    
    app.post("/search", async (req, res) => {
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