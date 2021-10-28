const getAllBills = (req, res) => {
    res.send("all bills recorded");
}

const addNewBill = (req, res) => {
    res.json(req.body);
}
const getOneBill = (req, res) => {
    res.json({ "id": req.param.id });
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