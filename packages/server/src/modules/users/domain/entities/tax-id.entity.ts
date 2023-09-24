import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';

export class TaxIdEntity {
  constructor(public readonly value: string) {
    this.value = value;
  }

  static create(taxId: string) {
    const validatedTaxId = this.validate(taxId);

    return new TaxIdEntity(validatedTaxId);
  }

  private static validate(taxId: string) {
    if (!taxId || isNaN(Number(taxId)) || taxId.length !== 11) {
      throw new EntityValidationError('Invalid tax id');
    }
    return taxId;
  }
}
