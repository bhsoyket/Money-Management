const router = require('express').Router();

router.get('/abc', (req, res) => {
    res.json({message: 'Wellcome to home router'});
})

module.exports = router;