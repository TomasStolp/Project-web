const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.js');
const Story = require('../models/story.js');

router.get('/', (req, res) => {

    // Story.find()

    const stories = Story.find({}, (err, result) => {

    }).exec()

    stories.then((result) => {
        // console.log(result)
        if(req.session.user){
            User.findOne({userName:req.session.user}).then((userdata)=>{
                var storyObjects = userdata.downloaded_stories;
                var downloaded_stories = storyObjects.map((story)=>{
                    return story.title;
                });

                console.log(downloaded_stories + ' dit zijn de gedownloade verhalen')




                res.render('home.ejs', {
                    data: result,
                    offline: req.session.offline,
                    userdata: downloaded_stories
                });
            })

        }else{
            res.redirect("login")
            // res.render('home.ejs', {
            //     data: result,
            //     offline: req.session.offline
            // });
        }
        
    });
    stories.catch((err) => {
        console.log('Followin error: ' + err);
    });


    // const userCount = User.find({}, (err, result) => {

    // }).exec()

    // userCount.then((result) => {
    //     res.render('home.ejs', {
    //         usercount: result.length,
    //         offline: true
    //     });
    // });
    // userCount.catch((err) => {
    //     console.log('Followin error: ' + err);
    // });



});

module.exports = router;