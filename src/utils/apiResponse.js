class ApiResponse {
    constructor(statusCode, message = "Success", data = null, errors = []) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;;
        this.errors = errors;

        if (data === null) {
            this.data = {};
        }
    }
}