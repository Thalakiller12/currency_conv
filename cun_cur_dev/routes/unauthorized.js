const express = require('express');
const router = express.Router();


router.get('/login',(req,res,next)=>{
    res.render('unauthorized/login');
});
router.get('/signup',(req,res,next)=>{
    res.render('unauthorized/signup');
});

module.exports = router;