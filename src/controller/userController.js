const bcrypt    = require('bcryptjs');
const userCrud  = require('../services/userCrud');
const _p        = require('../helpers/simpleAsync');

module.exports.userRegistation = async (req, res, next) => {
    if(req.body.password !== req.body.confirmPassword){
        res.status(400).json({message: 'password and confirm password not match'});
    }
    else {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;
        delete req.body.confirmPassword;

        const [err, user] = await _p(userCrud.createUser(req.body));
        if(err){
            return next(new Error('user creation failed'));
        }
        if(user){
            res.status(200).json({message: 'user create successfully', user});
        }
    }
}