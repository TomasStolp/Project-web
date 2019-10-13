const express = require('express');
const router = express.Router();

// Watched a tutorial for validation, reference: https://www.youtube.com/watch?v=hE5zeEiVqpw

router.post('/', (req, res, next) => {

        // Validation Login
        req.check('emailaddress', 'invalid emailaddress').isEmail()
        req.check('password', 'Password needs to contain at least 5 characters').isLength({
            min: 5
        })
        
        // req.body('emailaddress').custom(value => {
        //     return User.findOne({userName:value}).then(user => {
        //       if (user) {
        //         return Promise.reject('E-mail already in use');
        //       }
        //     })
        // })

        let errors = req.validationErrors();
        if (errors) {
            console.log(errors)
            req.session.errors = errors;
            res.redirect('/register');
        } else {
            console.log('going on')
            next();
        }
   
})



module.exports = router;
