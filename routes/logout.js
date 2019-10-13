const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('../models/user.js');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const session = require('express-session');
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    req.session.destroy();
    console.log('Session destroyed');
    res.redirect('/login');
})

module.exports = router;
