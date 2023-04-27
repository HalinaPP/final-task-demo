const { StatusCodes, getReasonPhrase } = require('http-status-codes');

class ErrorInfo extends Error {
  statusCode;

  message;

  constructor(statusCode, message = '') {
    super();

    if (!statusCode) {
      statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }

    this.statusCode = statusCode;
    this.message = message === '' ? getReasonPhrase(statusCode) : message;
  }
}

const handler = ({ statusCode, message }, req, res, next) => {
  res.status(statusCode).send(message);
  next();
};

module.exports = { handler, ErrorInfo };
