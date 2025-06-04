const express = require("express");
const { homeResponse } = require("./Controllers/HomeController");
const userData = require("./usersData");
const server = express();
const PORT = 8089;


server.get("/", homeResponse)

server.get("/home", homeResponse)

server.get("/contacts", (req, res) => {
    res.status(200).send("88s8s83384 thakurutkarsh2@gmail.com")
})

server.get("/fitness", (req, res) => {
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


// REAL API 
// 1. get all users 

server.get("/api/v1/users/getAllUsers", (req, res) => {
    const personsData = userData.data;
    const payload = {
        data: personsData,
        count: personsData.length
    }
    res.status(200).json(payload);
} )

// 2. get all female users 
// query params example : https://www.google.com/search?q=sachin&key=value  q=virat 
// SUBMISSION OF FORMS for this this should not be used

server.get("/api/v1/users/search", (req, res) => {
    const query = req.query;
    const searchedGender = query.gender; // female

    const filteredData = userData.data.filter(person => person.gender === searchedGender );

    const payload = {
        data: filteredData,
        count: filteredData.length
    }
    res.json(payload);
})

// 3. get detail about a user 
// way 1. we can use query params like above 
// way 2. we will be using params 

server.get("/api/v1/users/:username/", (req, res) => {
    const params = req.params;
    const searchedName = params.username;

    const filteredData = userData.data.filter(person => person.name.first === searchedName );

    const payload = {
        data: filteredData,
        count: filteredData.length
    }
    res.json(payload);
})





server.listen(PORT, () => {
    console.log("THUMBS UP server has started and listning at port EXPRESS JS", PORT)
})

