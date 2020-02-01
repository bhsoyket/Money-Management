const bcrypt    = require('bcryptjs');
const userCrud  = require('../services/userCrud');
const _p        = require('../helpers/simpleAsync');
const jwt       = require('jsonwebtoken');

// user registration
module.exports.userRegistration = async (req, res, next) => {
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

// user login
module.exports.userLogin = async (req, res, next) => {    
    const [err, user] = await _p(userCrud.login(req.body));
    if(err){
        return next(new Error('email or password is invalid'));
    }
    
    if(user){
        const comparePassword = bcrypt.compareSync(req.body.password, user.password);
        if(!comparePassword){
            res.status(200).json({message: 'password mismatch'});
        }
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        }, 'secret', { expiresIn: '2h' });

        if (token) {
            res.status(200).json({message: 'login successfully', token});
        } else {
            res.status(200).json({message: 'login failed'});
        }
    }
}