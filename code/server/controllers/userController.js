const Users = require("../models/users");
var bcrypt = require('bcryptjs');

const userList = async (req,res)=>{
    let data = await Users.find();
    res.json(data);
}

const userAdd = async (req,res)=>{
    let {name,email,phone,password} = req.body;
    let data = new Users({name,email,phone,password});
    let response = await data.save();
    let myToken = await data.getAuthToken();
    res.status(200).json({message:'ok',data:myToken});
}

const userLogin = async (req,res)=>{
    if(!req.body.email || !req.body.password){
        res.status(301).json({status:"Error",message:"Email & Password Required."});
    }
    let user = await Users.findOne({email:req.body.email});
    let response = {
        status : 200,
        message : ""
    }
    if(user){
        let match = await bcrypt.compare(req.body.password,user.password);
        if(match){
            response.status = 200;
            response.message = "Login Success.";
            response.token = await user.getAuthToken();
        }else{
            response.status = 301;
            response.message = "Invalid Credentials.";
        }
    }else{
        response.status = 301;
        response.message = "Email not Exist!";
    }
    res.status(200).json({status:200,data:response});
}

module.exports = {
    userList,
    userAdd,
    userLogin
}