const PayrollDataModel = require("../model/payrollSchema");
 
exports.getAllPayrollDatas = async () => {
  return await PayrollDataModel.find();
};
 
exports.createPayrollData = async (PayrollData) => {
  return await PayrollDataModel.create(PayrollData);
};
exports.getPayrollDataById = async (uid) => {
  return await PayrollDataModel.findOne({employeeId:uid});
};
 
exports.updatePayrollData = async (uid, PayrollData) => {
  return await PayrollDataModel.findOneAndUpdate({employeeId:uid}, PayrollData);
};
exports.updatePayrollDataByKafka = async (uid, Empctc) => {
  return await PayrollDataModel.findOneAndUpdate({employeeId:uid},{ctc:Empctc});
};
 
exports.deletePayrollData = async (uid) => {
  return await PayrollDataModel.findOneAndDelete({employeeId:uid});
};
