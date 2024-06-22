const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.send("hey it's working ");
});

router.post("/register",function(req,res){
    let { email,password,fullname } = req.body;
    
});


module.exports = router;