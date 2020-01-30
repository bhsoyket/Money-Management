const User      = require('../models/User');
const _p        = require('../helpers/simpleAsync');

module.exports.createUser = async (userData) => {
    return new Promise(async (resolve, reject)=> {
        const [err, user] = await _p(User.find({email: userData.email}));
        if(!err && user.email){
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