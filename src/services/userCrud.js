const User      = require('../models/User');
const _p        = require('../helpers/simpleAsync');

// create user
module.exports.createUser = async (userData) => {
    return new Promise(async (resolve, reject)=> {        
        const [err, user] = await _p(User.findOne({email: userData.email}));
        if(!err && user){
            return resolve('User already exist');
        }
        const [userErr, saveUser] = await _p(User.create(userData));
        if(userErr || !saveUser){
            return reject(userErr.message);
        }
        if(saveUser){
            return resolve(saveUser);
        }
    })
}

// login user
module.exports.login = async (reqData) => {
    return new Promise(async (resolve, reject) => {
        const [err, user] = await _p(User.findOne({email: reqData.email}));
        if(err){
            return reject(err.message);
        }
        if(user){
            return resolve(user);
        }
    })
}