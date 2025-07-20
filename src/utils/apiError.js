class ApiError extends Error {
    constructor(
        message = "Some thing is wrong", statusCode, errors = [], statck = ""
    ) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;