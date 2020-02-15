const {check} = require('express-validator');


module.exports.registerValidator = [
    check('name').exists({ checkNull: true, checkFalsy: true }).withMessage('Enter your name').isString(),
    check('email').exists({ checkNull: true, checkFalsy: true }).isEmail().normalizeEmail().withMessage('Enter your valid email'),
    check('password').exists({ checkNull: true, checkFalsy: true }).isString().isLength({ min: 6 }).withMessage('Enter password min 6 character'),
    check('confirmPassword').exists({ checkNull: true, checkFalsy: true }).isString().isLength({ min: 6 }).withMessage('Retype your password'),
]
module.exports.loginValidator = [
    check('email').exists({ checkNull: true, checkFalsy: true }).isEmail().normalizeEmail(),
    check('password').exists({ checkNull: true, checkFalsy: true }).isString()
]