const express = require ("express")
const morgan = require ("morgan") //log del server
const cors = require ("cors") // Recursos de Origen Cruzado (controlar emision de respuestas al cliente que solicitó)
let app = express ();
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

//configuración del CORS
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*'); //PERMITE TODOS LOS ORÍGENES <-- nos da "OPTIONS"
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const userView = require("./view/user.js");
const sequelize = require ("./conection/db.js");
const friend1 = require ("./view/friend_search.js");
const login1 = require ("./view/user_login.js");


async function serverStart () {
    try {
        await sequelize.authenticate();
        app.listen(3001, () => {
            console.log("System starts in http://localhost:3001")
        })
    }
    catch (error) {
        console.log ("SQL authentication error")
    }

}


serverStart();
userView(app);
friend1(app);
login1(app);
