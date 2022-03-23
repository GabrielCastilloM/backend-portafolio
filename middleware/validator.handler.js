const boom = require('@hapi/boom');

const validatorHandler = (schema, property) =>  {
  return (req, res, next) => {
    const data = req[property];
    //abortEarly lo utilizamos para enviar todos los errores de una vez
    const { error }= schema.validate(data, {AbortEarly: false});
    if (error) {
       //mandamos al manejador de errores si lo hay para que nos muestre el formato que ya creamos
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
