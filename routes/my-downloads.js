const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', (req, res) => {
    /* I took this example out of the slides from the BE lecture.
    *  I tried to make it asynchronous before I realised it already is.
    */

    if(!req.session.user){
      res.redirect('/login');
    }

    console.log('function top twenty running');
    User.findOne({userName:req.session.user}).exec()
  
    .catch((err)=>{
      console.log(err)
    })
    .then((data)=>{
      let test = data.firstName;
      // console.log(test)
      // console.log(data + '?');

      // Story.find({}, )

      res.render('my-downloads.ejs', {data: data, offline:req.session.offline, pageType:'downloads'});
    })

  });

  router.delete('/:story', (req, res)=>{
      User.findOne({userName:req.session.user}).exec()
      .catch((err)=>{
          console.log(err);
      })
      .then((data)=>{
          console.log(data);
          console.log(data.top_20.indexOf(req.params.band))
      })
  })

module.exports = router;

