const Bill = require("../models/bills")
const asyncWrapper = require("../middlewares/async")
const { createCustomeError } = require("../errors/custome-error.js")


// invoking async wrapper
const getAllBills = asyncWrapper(async (req, res) => {
    const bills = await Bill.find({});
    res.status(200).json({
        "success": true,
        "bills": bills
    });
}
)

const addNewBill = asyncWrapper(async (req, res) => {
    const newBill = await Bill.create(req.body);
    res.status(200).json({
        "success": true,
        "objectCreated": newBill
    });
})

const getOneBill = asyncWrapper(async (req, res, next) => {
    const { id: billID } = req.params;
    const bill = await Bill.findOne({ _id: billID });
    if (!bill) {
        // return is just for js to known that it need to exit the function
        // so that it does not send the second response
        return next(createCustomeError(`Cannot find any bill with the provided id ${billID}`, 404))
    }
    res.status(200).json({
        "success": true,
        "bill": bill
    })
})

const deleteBill = asyncWrapper(async (req, res) => {
    const { id: billID } = req.params;
    const billDeleted = await Bill.findOneAndDelete({ _id: billID })
    if (!billDeleted) {
        return next(createCustomeError(`Cannot find any bill with the provided id ${billID}`, 404))
    }
    res.status(200).send({
        success: true,
        billDeleted: billDeleted
    })
})

const updateBill = asyncWrapper((req, res) => {
    const { id: billID } = req.params;
    const updatedBill = Bill.findOneAndUpdate({ _id: billID }, req.body,
        {
            new: true,
            runValidators: true
        })
    if (!updatedBill) {
        return next(createCustomeError(`Cannot find any bill with the provided id ${billID}`, 404))
    }
    res.status(200).json({
        success: true,
        updatedBill
    })

})

module.exports = {
    getAllBills,
    addNewBill,
    getOneBill,
    updateBill,
    deleteBill
}