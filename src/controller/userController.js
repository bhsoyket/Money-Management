const bcrypt = require('bcryptjs');

module.exports.userRegistation = async (req, res, next) => {
if (req.body && req.body.password === req.body.confirmPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    delete req.body.confirmPassword;
}
res.json(req.body);
}