const PayrollDataService = require("../services/PayrollService");



 
exports.getAllPayrollDatas = async (req, res) => {
  try {
    const PayrollDatas = await PayrollDataService.getAllPayrollDatas();
    res.json({ data: PayrollDatas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createPayrollData = async (req, res) => {
  try {
    
    const PayrollData = await PayrollDataService.createPayrollData(req.body);
    // console.log(PayrollData);
    res.json({ data: PayrollData, status: "success" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getPayrollDataById = async (req, res) => {
  try {
    
    const PayrollData = await PayrollDataService.getPayrollDataById(req.params.id);
    console.log(PayrollData);
    res.json({ data: PayrollData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updatePayrollData = async (req, res) => {
  try {
    const PayrollData = await PayrollDataService.updatePayrollData(req.params.id, req.body);
    res.json({ data: PayrollData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deletePayrollData = async (req, res) => {
  try {
    const PayrollData = await PayrollDataService.deletePayrollData(req.params.id);
    res.json({ data: PayrollData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};