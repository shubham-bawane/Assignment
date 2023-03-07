const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const EmployeeSchema = new Schema({
  payrollId: Number,
  employeeId: Number,
  registeredBank: String,
  ctc:Number,
  BankAccountNumber: Number,
  MonthlySalary:Number,
  
});
 
module.exports = mongoose.model("Payroll", EmployeeSchema);