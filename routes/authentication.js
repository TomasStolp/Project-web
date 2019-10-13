const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    if(!req.session.user){
        console.log('you still need to login')
        return res.redirect('/login')
    }else{
        console.log('hey, you are still logged in')
        next();
    }
})

module.exports = router;