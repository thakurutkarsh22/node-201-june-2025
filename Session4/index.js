const express = require("express");
const dotenv = require('dotenv')
dotenv.config() // this command will load all the variables inside .env file in process.env
// process is a global vaiable 
const UserActivityRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const { Authorize } = require("./Middlewares/Authorization");
const { default: mongoose } = require("mongoose");
const server = express();
const PORT = process.env.PORT;


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


// use can handel all the request (GET PUT POST DELETE)
server.use("/api/v1/users", UserActivityRouter)



// database connection 
const databaseUrl = process.env.DB_URL + ":" + process.env.DB_PORT;
mongoose.connect(databaseUrl).then(() => console.log("thumbs up db is up")).catch((error) => {
    console.log(error);
})

server.listen(PORT, () => {
    console.log("THUMBS UP server has started and listning at port EXPRESS JS", PORT)
})

