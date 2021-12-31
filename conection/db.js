let Sequelize = require ("sequelize");

const sequelize = new Sequelize ("usuarios", "root", null, {
    host:"localhost",
    dialect:"mysql",
    port:3306
})

module.exports=sequelize;