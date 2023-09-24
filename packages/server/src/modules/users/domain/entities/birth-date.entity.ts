import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';
import { isValidDate } from '@/shared/helpers/is-valid-date';

export class BirthDateEntity {
  constructor(public readonly value: Date) {
    this.value = value;
  }

  static create(birthDate: Date) {
    const validatedbirthDate = this.validate(birthDate);

    return new BirthDateEntity(validatedbirthDate);
  }

  private static validate(birthDate: Date) {
    if (!birthDate) {
      throw new EntityValidationError('Birth date should not be empty');
    }

    if (!isValidDate(birthDate)) {
      throw new EntityValidationError('Birth date must be a date');
    }

    return birthDate;
  }
}
