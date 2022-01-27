const userModel = require ("../model/friend_search.js");

module.exports.searchFriend = async (result) => {
    let foundUsers = await userModel.searchUser(result)
    return (foundUsers);

}
 