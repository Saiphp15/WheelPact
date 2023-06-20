const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:${process.env.DB_PORT}/${process.env.DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  // Continue with your code and define your Mongoose models and operations
}).catch(err => {
  console.log("Error connecting to MongoDB:", err);
});

module.exports = mongoose;