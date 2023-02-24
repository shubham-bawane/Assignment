const EmployeeModel = require("../model/EmployeeSchema");
 
exports.getAllEmployees = async () => {
  return await EmployeeModel.find();
};
 
exports.createEmployee = async (Employee) => {
  return await EmployeeModel.create(Employee);
};
exports.getEmployeeById = async (uid) => {
  return await EmployeeModel.find({id:uid});
};
 
exports.updateEmployee = async (uid, Employee) => {
  return await EmployeeModel.findOneAndUpdate({id:uid}, Employee);
};
 
exports.deleteEmployee = async (uid) => {
  return await EmployeeModel.findOneAndDelete({id:uid});
};
