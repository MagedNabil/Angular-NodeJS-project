const util = require('util');
const jwt = require('jsonwebtoken');

const Admin = require('./adminModel');


const asyncValidateFunc = util.promisify(jwt.verify);


const authentication = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const payload = await asyncValidateFunc(authorization, process.env.SECRET_KEY);
        console.log(payload);
        const admin = await Admin.findById(payload.id)
        req.user = admin;

    } catch (error) {
        error.message = "unauthorized";
        error.statusCode = 403;
        next(error);
    }
    next();
}


module.exports = authentication;