const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/customerController');
var jwt = require('jsonwebtoken');

let jwtAuth = (req,res,next)=>{
    var token = req.headers.authorization;
    token = token.split(" ")[1];
    jwt.verify(token,process.env.SECRETKEY,function(err,decoded){
        if(err){
            res.send({status:500,message:"Invalid Token."});
        }else{
            next();
        }
    });
}

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));

router.get('/',(req,res)=>{
    res.send("hello our server running on port 8080");
});

router.get("/list", jwtAuth, ctrl.customerList);

router.post("/add", ctrl.addCustomer);

router.post("/login", ctrl.customerLogin);

module.exports = router;