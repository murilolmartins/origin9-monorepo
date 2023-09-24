import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';

export class AdressEntity {
  constructor(public readonly value: string) {
    this.value = value;
  }

  static create(adress: string) {
    const validatedAdress = this.validate(adress);

    return new AdressEntity(validatedAdress);
  }

  private static validate(adress: string) {
    if (typeof adress !== 'string') {
      throw new EntityValidationError('Adress must be a string');
    }

    if (adress.length > 255) {
      throw new EntityValidationError(
        'Adress must be shorter than or equal to 255 characters'
      );
    }
    return adress;
  }
}
