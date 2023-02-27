const express = require("express");
const {
  getAllPayrollDatas,
  createPayrollData,
  getPayrollDataById,
  updatePayrollData,
  deletePayrollData,
} = require("../controller/payrollInfoController");
 
const router = express.Router();
 
router.route("/").get(getAllPayrollDatas).post(createPayrollData);
router.route("/:id").get(getPayrollDataById).put(updatePayrollData).delete(deletePayrollData);
 
module.exports = router;