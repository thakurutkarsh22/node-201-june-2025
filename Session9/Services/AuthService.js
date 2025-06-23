const bcrypt = require("bcrypt");
const UserModel = require("../Models/User.model");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../Middlewares/Authorization");


class AuthService {

    static async login(username, password) { // asdf1234
        const loginResponse = {
            isLogged: false,
            token: ""
        }

        // i want to find out if the username exist
        const userArray = await AuthService.findUserByUserName(username);
        if(!userArray || !userArray.length) {
            // it means there is no user like this username
            return loginResponse;
        } else {

            // we need to check the password 
            const res = await bcrypt.compare(password, userArray[0].password) // true false
            // asdf1234 - 2b$10$5clfjErjbq48hhQ0raZ/Eef4bTKgRKP2RtQTRh34kviUhNl3YeU7y

            // JWT TOKEN 
            let jwttoken = "";
            if(res) {
                jwttoken = jwt.sign({username:username }, JWT_KEY, {
                    expiresIn: "100000ms"
                })
            }
             

            return {
                isLogged: res,
                token: jwttoken
            }
            
        }

    }

    static async encryptPassword(plainTextPassword) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        return hashedPassword;
    }

    static async findUserByUserName(username) {
        const user = await UserModel.find({username});
        return user;
    }

}

module.exports = AuthService