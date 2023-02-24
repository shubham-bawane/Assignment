const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const EmployeeSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  age:Number,
  ctc:Number,
  organization:String
});
 
module.exports = mongoose.model("Employee", EmployeeSchema);