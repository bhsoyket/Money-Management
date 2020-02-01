const {check} = require('express-validator');


module.exports.registerValidator = [
    check('name').exists({ checkNull: true, checkFalsy: true }).isString(),
    check('email').exists({ checkNull: true, checkFalsy: true }).isEmail().normalizeEmail(),
    check('password').exists({ checkNull: true, checkFalsy: true }).isString().isLength({ min: 6 }),
    check('confirmPassword').exists({ checkNull: true, checkFalsy: true }).isString().isLength({ min: 6 }),
]
module.exports.loginValidator = [
    check('email').exists({ checkNull: true, checkFalsy: true }).isEmail().normalizeEmail(),
    check('password').exists({ checkNull: true, checkFalsy: true }).isString()
]