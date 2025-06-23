const { JWT_KEY } = require('../Middlewares/Authorization');
const AuthService = require('../Services/AuthService');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// const GoogleStratergy = require("passport-google").Strategy;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY,
}

const jwtStratergy = new JwtStrategy(options, async (payload, done) => {
    const {username} = payload;
    console.log("username in jwt stratergy", username);

    try {
        // we can fetch the user and check if the user exist or not 

        const userFromDB = await AuthService.findUserByUserName(username)

        if(username && userFromDB) {
            return done(null, true) // return done(null, userFromDB);
        } else {
            return done(null, false)
        }
    
    } catch(error) {
        return done(error, false);
    }
});


module.exports = (passport) => {
    passport.use(jwtStratergy);
}