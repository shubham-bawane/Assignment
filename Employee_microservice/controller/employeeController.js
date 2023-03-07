const EmployeeService = require("../services/EmployeeService");
const {SendToKafka} = require("../services/kafkaProcuderService");


 
exports.getAllEmployees = async (req, res) => {
  try {
    const Employees = await EmployeeService.getAllEmployees();
    res.json({ data: Employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createEmployee = async (req, res) => {
  try {
    
    const Employee = await EmployeeService.createEmployee(req.body);
    // console.log(Employee);
    res.json({ data: Employee, status: "success" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getEmployeeById = async (req, res) => {
  try {
    
    const Employee = await EmployeeService.getEmployeeById(req.params.id);
    console.log(Employee);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateEmployee = async (req, res) => {
  try {
    const Employee = await EmployeeService.updateEmployee(req.params.id, req.body);
    res.json({ data: Employee, status: "success" });
    // console.log(Employee.ctc);
    // console.log(Employee.id);
    SendToKafka(Employee.id, Employee.ctc);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteEmployee = async (req, res) => {
  try {
    const Employee = await EmployeeService.deleteEmployee(req.params.id);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};