const expressValidator = require('express-validator');
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// Watched a tutorial for validation, reference: https://www.youtube.com/watch?v=hE5zeEiVqpw

router.post('/', (req, res, next) => {

    // Validation Login
    req.check('emailaddress', 'invalid emailaddress').not().isEmail()
    req.check('password', 'Password needs to contain at least 5 characters').isLength({
        min: 5
    })

    let errors = req.validationErrors();
    if (errors) {
        console.log(errors)
        req.session.errors = errors;
        res.redirect('/login');
    } else {
        console.log('going on')
        next();
    }

})



module.exports = router;