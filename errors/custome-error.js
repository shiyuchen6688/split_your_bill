class CustomeAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
    }
}

// new instance can be created like this: new CustomeAPIError(message, statusCode)
// or you can create functio to do that
const createCustomeError = (message, statusCode) => {
    return new CustomeAPIError(message, statusCode)
}

module.exports = { CustomeAPIError, createCustomeError };