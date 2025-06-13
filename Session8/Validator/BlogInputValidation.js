const Joi = require("joi");

const BlogInputSchema = Joi.object().keys({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).max(1000).required(),
});


function isBlogValid(userInput) {
    /**
     * userInput is 
     * {
            "title": "",
            "content": "content1"
        }
        its given in postman
     */

    const validationResult = BlogInputSchema.validate(userInput); 
    return validationResult;
}


module.exports = {isBlogValid}

/**
 * 
 * we need joi schema for input validation 
 * modals are for database validation (saving validation) both are bones apart
 */