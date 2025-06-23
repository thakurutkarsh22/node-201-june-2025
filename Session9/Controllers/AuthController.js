const UserModel = require("../Models/User.model");
const AuthService = require("../Services/AuthService");
const { encryptPassword } = require("../Services/AuthService");

async function register(req, res, next) {

    const body = req.body;
    const {username, age, email, password} = body;

    const userObj = UserModel({
        username,
        age,
        email,
        password: await encryptPassword(password)
    })

    try {
        const response = await userObj.save();
        res.status(201).json(response);
    } catch(error) {
        res.status(400).json(error);
    }
}

async function login(req, res, next) {
    const body = req.body;
    const {username, password} = body;

    const response = await AuthService.login(username, password);

    if(response.isLogged) {
        res.status(200).json({message: "loggin successful", token: response.token});
    } else {
        res.status(403).json({message: "try again"});
    }
}

module.exports = {register, login};