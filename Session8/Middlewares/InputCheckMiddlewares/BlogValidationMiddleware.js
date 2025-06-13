const { isBlogValid } = require("../../Validator/BlogInputValidation");

function BlogValidationMiddleware(req, res, next) {
    const body = req.body;
    const validationResult = isBlogValid(body);
    const {error, value} = validationResult;
    
    if(error) {
        res.status(400).json({error, message: "Please check your input"});
    } else {
        next();
    }
     
    
}

module.exports = {BlogValidationMiddleware}