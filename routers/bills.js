
const express = require("express");
const router = express.Router();

const { getAllBills, addNewBill, getOneBill, updateBill, deleteBill } = require("../controllers/bills.js")

router.route("/").get(getAllBills).post(addNewBill)

router.route("/:id").get(getOneBill).patch(updateBill).delete(deleteBill)


module.exports = router