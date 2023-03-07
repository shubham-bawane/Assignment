const express = require("express");
const app = express();
const EmployeeRouter = require("./router/EmployeeRoutes");
 

const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use("/api/Employees", EmployeeRouter);

mongoose.connect('mongodb://127.0.0.1:27017/my-db')
  .then(() => console.log('MongoDB Connected!'));

 
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
 
module.exports = app; 