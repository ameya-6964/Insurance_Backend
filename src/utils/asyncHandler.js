/**
 * Wrapper to catch async errors and pass them to Express error handler.
 * Eliminates try-catch blocks in controllers.
 */
const AsyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default AsyncHandler;