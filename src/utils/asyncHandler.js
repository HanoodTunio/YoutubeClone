// A wrapper to catch errors in async route handlers and pass them to Express error handler
const asyncHandler = (requestHandler) =>
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };

module.exports = asyncHandler;
