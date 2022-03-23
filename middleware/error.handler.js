

function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  console.log('boomErrorHandler');
  if (err.isBoom) {
    const {output} = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err);
}

module.exports ={logErrors, errorHandler, boomErrorHandler }
