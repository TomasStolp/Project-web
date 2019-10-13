const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    if(req.session.user){
        res.render('my-profile.ejs', {firstName:req.session.firstName});
    }else{
      res.redirect('/login');
    }
 
});

module.exports = router;