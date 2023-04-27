const morgan = require( 'morgan');
const { createLogger, format, transports, Logger } = require( 'winston');

// eslint-disable-next-line prettier/prettier
const morganFormatString = ':method :status :url query=:query body=:body size :res[content-length] - :response-time ms';
const morganFormat = morgan.compile(morganFormatString);

morgan.token('query', (req) => JSON.stringify(req.query));
morgan.token('body', (req) => JSON.stringify(req.body));

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(format.colorize(), format.cli()),
    }),
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.prettyPrint()),
    }),
    new transports.File({
      filename: './logs/info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.prettyPrint()),
    }),
  ],
});
/* eslint class-methods-use-this: 0 */
class LoggerStream {
  write(message) {
    const mes = message.toString();
    const mesChunk = mes.split(' ');
    const status = mesChunk[1];
    if (Number(status) >= 400) {
      logger.error(message);
    } else {
      logger.info(message);
    }
  }
}
const loging = morgan(morganFormat, { stream: new LoggerStream() })
module.exports =  {logger, loging};
