import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';

export class NameEntity {
  constructor(public readonly value: string) {
    this.value = value;
  }

  static create(Name: string) {
    const validatedName = this.validate(Name);

    return new NameEntity(validatedName);
  }

  private static validate(name: string) {
    if (typeof name !== 'string') {
      throw new EntityValidationError('Name must be a string');
    }

    if (name.length > 255) {
      throw new EntityValidationError(
        'Name must be shorter than or equal to 255 characters'
      );
    }
    return name;
  }
}
