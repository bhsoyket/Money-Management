const router            = require('express').Router();
const userController    = require('../controllers/userController');
const {registerValidator, loginValidator}   = require('../middlewares/userValidation');
const {checkInvalid}    = require('../middlewares/validationReject');

router.get('/', (req, res) => {
    res.json({message: 'Wellcome to home router'});
})

router.post('/register', registerValidator, checkInvalid,  userController.userRegistration);
router.post('/login', loginValidator, checkInvalid,  userController.userLogin);

module.exports = router;
