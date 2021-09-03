const Joi = require('joi');

const userSchema = Joi.object({
    first_name: Joi.string().min(2).max(60),
    last_name: Joi.string().min(2).max(60),
    address: Joi.string().min(10).max(200),
    postcode: Joi.string().length(5),
    city: Joi.string().min(2).max(70),
    email: Joi.string().min(3).max(70),
    password: Joi.string().min(4).max(50),
    phone_number: Joi.string().length(10)
}).required().min(1).max(8);


module.exports = userSchema;