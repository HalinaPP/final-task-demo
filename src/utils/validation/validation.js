const { StatusCodes }  = require( 'http-status-codes');

const errorResponse = (schemaErrors) => {
  const errors = schemaErrors.map(({ path, message }) => ({ path, message }));
  return {
    status: 'failed',
    errors,
  };
};

const validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error?.isJoi) {
    res.status(StatusCodes.BAD_REQUEST).json(errorResponse(error.details));
    return;
  }
  next();
};

module.exports =  validateSchema;
