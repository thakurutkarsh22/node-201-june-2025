const express = require("express");
const dotenv = require('dotenv')
dotenv.config() // this command will load all the variables inside .env file in process.env
// process is a global vaiable 
const UserActivityRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const { Authorize } = require("./Middlewares/Authorization");
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


server.listen(PORT, () => {
    console.log("THUMBS UP server has started and listning at port EXPRESS JS", PORT)
})

// every request will 1st come to index.js and will go from top to bottom.


/**
 * Controllers: Request handlers
 * Middlewares: Special Request handlers (any repetitive code in controller can come to middleware )
 */

// right now for the sake of class code we are sending the .env file to github but in real life we do not perform this stunt
