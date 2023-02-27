const express = require("express");
const app = express();
const EmployeeRouter = require("./router/PayrollRoutes");
 

const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use("/api/payroll", EmployeeRouter);

mongoose.connect('mongodb://127.0.0.1:27017/my-db')
  .then(() => console.log('MongoDB Connected!'));

 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app; 