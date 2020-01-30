const router            = require('express').Router();
const userController    = require('../controller/userController');
const {userValidator}   = require('../middleware/userValidation');
const {checkInvalid}    = require('../middleware/validationReject');

router.get('/', (req, res) => {
    res.json({message: 'Wellcome to home router'});
})

router.post('/register', userValidator, checkInvalid,  userController.userRegistation);

module.exports = router;
