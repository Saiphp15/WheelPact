const Customers = require('../models/customers');
var bcrypt = require('bcryptjs');

const customerList = async (req,res) =>{
    let data = await Customers.find();
    res.json(data);
}

const addCustomer = async (req,res) =>{
    let {name,email,phone} = req.body;
    let data = new Customers({name,email,phone});
    
    let response = await data.save(); 
    let myToken = await data.getAuthToken();
    res.status(200).json({message:'Customer Added Successfully.',data:myToken});
}

const customerLogin = async (req,res) =>{
    if(!req.body.phone){
        res.status(301).json({status:'Error',message:'Enter Mobile Number.'});
    }
    let customer = await Customers.findOne({phone:req.body.phone});
    let response = {
        status : 200,
        message:''
    }
    if(customer){
        response.status = 200;
        response.message = 'Customer Login Successfully.';
        response.token = await customer.getAuthToken();
    }else{
        response.status = 301;
        response.message = "Invalid Phone.";
    }
    res.json(response);
}
 
module.exports = {
    customerList,
    addCustomer,
    customerLogin
}