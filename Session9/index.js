const express = require("express");
const dotenv = require('dotenv')
dotenv.config() // this command will load all the variables inside .env file in process.env
// process is a global vaiable 
const UserActivityRouter = require("./Routes/UserActivityRoute");
const BlogRouter = require("./Routes/BlogsRoute");
const HomeRouter = require("./Routes/HomeRoute");
const AuthRouter = require("./Routes/AuthRoute");
const { Authorize } = require("./Middlewares/Authorization");
const { default: mongoose } = require("mongoose");
const server = express();
const PORT = process.env.PORT;

var cors = require('cors')
server.use(cors()) // every request will be allowdd through this (CROtatus
// SS ORIGIN request)


server.use( express.json() ); 



server.use("/", HomeRouter)



server.get("/fitness", Authorize, (req, res, next) => {
    const fitness = {
            name: "utkarsh",
            height: 173,
            weight: 70,
            diet: ["eggs", "chapati"],
            address: {
                street: "101 street",
                houseNumber: 123
            },
            shouldSleep8Hours: true,
            createdDate: new Date().toISOString(),
        }

        // this is only feature in expressjs not in node
        res.status(200).json(fitness);
})



server.use("/api/v1/users", UserActivityRouter)

server.use("/api/v1/blogs", BlogRouter)

// auth route which will help me in register / login
server.use("/api/v1/auth", AuthRouter);



// database connection 
const databaseUrl = process.env.DB_URL + ":" + process.env.DB_PORT + "/Criojune2025";
mongoose.connect("mongodb+srv://asdf1234:asdf1234@cluster0.c3u6pt8.mongodb.net/crio").then(() => console.log("thumbs up db is up")).catch((error) => {
    console.log(error);
})

server.listen(PORT, () => {
    console.log("THUMBS UP server has started and listning at port EXPRESS JS", PORT)
})

