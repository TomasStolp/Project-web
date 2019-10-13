const User = require('../models/user.js');
const Story = require('../models/story.js');
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{

console.log('test')
    User.findOne({userName:req.session.user}).exec()
  
    .catch((err)=>{
      console.log(err)
    })
    .then((user)=>{
        // console.log(user)

        findMatches(user);
       
      
    })
    .catch((err)=>{
        console.log(err)
    })

    function findMatches(user){

        User.findOne({top_20:{$in:{name: 'Iron Maiden'}}}, (result)=>{


            if(result){
                console.log(result)
                res.render('matches.ejs', {data:result})
            }
            return result;
        })
        
    }

    

    // res.render('matches.ejs', data:

})


module.exports = router;