const SECRET_UTKARSH_SERVER_PASSWORD = "asdf1234"
const jwt = require("jsonwebtoken");
const JWT_KEY = "asdasdasdsadasdasdsad123123"

function Authorize(req, res, next) {

    const headers = req.headers;
    const token = headers.authorization.split(" ")[1];  // bearer jwttoken


    if(!token) {
        res.status(401).json({message: "please login"});
    } else {
        // 1. verify the TOEKN 
        jwt.verify(token, JWT_KEY, (error, decodedJwtToken) => {
            if(error) {
                // 1. someone is trying to hack by mocking my ID
                // 2. time has expired 
                res.status(401).json({message: "please re- login"});
            } else {
                next();
            }
        })

    }
}

module.exports = {Authorize, JWT_KEY}