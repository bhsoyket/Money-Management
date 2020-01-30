const router            = require('express').Router();
const userController    = require('../controller/userController');
const {userValidator}   = require('../middlewares/userValidation');
const {checkInvalid}    = require('../middlewares/validationReject');

router.get('/', (req, res) => {
    res.json({message: 'Wellcome to home router'});
})

router.post('/register', userValidator, checkInvalid,  userController.userRegistation);

module.exports = router;
