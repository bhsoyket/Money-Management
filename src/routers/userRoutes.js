const router         = require('express').Router();
const userController = require('../controller/userController')

router.get('/', (req, res) => {
    res.json({message: 'Wellcome to home router'});
})

router.post('/register', userController.userRegistation);

module.exports = router;
