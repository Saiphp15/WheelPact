const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;

// Enable CORS
app.use(cors());

app.use(express.json());

const path = require("path");
require("dotenv").config({
    path : path.join(__dirname,'.env')
});

app.use("/users", require('./routes/users'));
app.use("/customers", require('./routes/customers'));

app.listen(port,()=>{
    console.log(`app running on port ${port} `);
});

function newFunction_1() {
    newFunction();
}

