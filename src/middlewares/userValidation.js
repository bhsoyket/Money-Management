const {check} = require('express-validator');


module.exports.userValidator = [
    check('name').exists({ checkNull: true, checkFalsy: true }).isString(),
    check('email').exists({ checkNull: true, checkFalsy: true }).isEmail().normalizeEmail(),
    check('password').exists({ checkNull: true, checkFalsy: true }).isString(),
    check('confirmPassword').exists({ checkNull: true, checkFalsy: true }).isString(),
]