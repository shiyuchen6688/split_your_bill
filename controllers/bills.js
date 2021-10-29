const Bill = require("../models/bills")

const getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find({});
        res.status(200).json({
            "success": true,
            "bills": bills
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "error": err
        })
    }

}

const addNewBill = async (req, res) => {
    try {
        const newBill = await Bill.create(req.body);
        res.status(200).json({
            "success": true,
            "objectCreated": newBill
        });
    } catch (err) {
        res.status(500).json({
            "success": false,
            "error": err
        })
    }
}
const getOneBill = async (req, res) => {
    try {
        const { id: billID } = req;
        const bill = await Bill.find({ id: billID });
        res.status(200).json({
            "success": true,
            "bill": bill
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "success": false,
            "error": err
        })
    }
}
const updateBill = (req, res) => {
    res.send("update one bill");
}
const deleteBill = (req, res) => {
    res.send("delete bill");
}


module.exports = {
    getAllBills,
    addNewBill,
    getOneBill,
    updateBill,
    deleteBill
}