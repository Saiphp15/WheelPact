const mongoose = require("mongoose");
const conn = require('../config/db');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var customerSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    tokens : [
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
},{
    timestamps : true
});

customerSchema.methods.getAuthToken = async function(data){
    let params = {
        id:this._id,
        name:this.name,
        email:this.email,
        phone:this.phone
    }
    var tokenValue = jwt.sign(params, process.env.SECRETKEY);
    this.tokens = this.tokens.concat({token:tokenValue})
    await this.save();
    return tokenValue;
}

let customers = conn.model("customers",customerSchema);

module.exports = customers;