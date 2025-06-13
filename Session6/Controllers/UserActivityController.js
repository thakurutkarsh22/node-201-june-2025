const userData = require("../usersData");


function getAllUSers (req, res, next) {
    const personsData = userData.data;
    const payload = {
        data: personsData,
        count: personsData.length
    }
    res.status(200).json(payload);    
} 



function getUserByGender (req, res) {
    const query = req.query;
    const searchedGender = query.gender; // female

    const filteredData = userData.data.filter(person => person.gender === searchedGender );

    const payload = {
        data: filteredData,
        count: filteredData.length
    }
    res.json(payload);
}


function getUserByUserName (req, res) {
    const params = req.params;
    const searchedName = params.username;

    const filteredData = userData.data.filter(person => person.name.first === searchedName );

    const payload = {
        data: filteredData,
        count: filteredData.length
    }
    res.json(payload);
}


module.exports = { getAllUSers, getUserByGender, getUserByUserName }
