const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 400);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
