export class EntityValidationError extends Error {
  statusCode = 400;
  constructor(public message: string) {
    super(message);
    this.name = 'EntityValidationError';
  }
}
