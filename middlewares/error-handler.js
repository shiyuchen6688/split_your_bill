const { CustomeAPIError } = require("../errors/custome-error.js")

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomeAPIError) {
        return res.status(err.status).json({
            msg: "CustomeAPIError: " + err.message
        });
    }
    return res.status(500).json({ msg: err.message });
}

module.exports = errorHandler