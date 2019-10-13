const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
console.log(res.status())
        console.log('at least got here')
        res.status(404).render('404.ejs', {offline: true})
})

module.exports = router;