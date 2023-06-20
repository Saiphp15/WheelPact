const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
require("dotenv").config({
    path : path.join(__dirname,'.env')
});

app.use("/users", require('./routes/users'));
app.use("/customers", require('./routes/customers'));

app.listen(port,()=>{
    console.log(`app running on port ${port} `);
});