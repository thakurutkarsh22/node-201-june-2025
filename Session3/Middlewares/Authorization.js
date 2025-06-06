const SECRET_UTKARSH_SERVER_PASSWORD = "asdf1234"

function Authorize(req, res, next) {

    const headers = req.headers;
    const passwordFromRequest = headers.authorization;  // asdf1234 this is the password given in postman by the user

    if(SECRET_UTKARSH_SERVER_PASSWORD === passwordFromRequest) {
        next();
    } else {
        res.status(403).json({messge: "hey please login"})
    }
}

module.exports = {Authorize}