import { AdressEntity } from './adress.entity';
import { BirthDateEntity } from './birth-date.entity';
import { NameEntity } from './name.entity';
import { TaxIdEntity } from './tax-id.entity';

import type { Either } from '@/shared/domain/contracts/either';
import { left, right } from '@/shared/domain/contracts/either';
import { Entity } from '@/shared/domain/entities/entity';
import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type UserProps = {
  id?: string;
  name: string;
  taxId: string;
  birthDate: Date;
  address: string;
  status?: UserStatus;
  updatedAt?: Date;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps) {
    super(props, props.id, props.createdAt, props.updatedAt);
    this.props.taxId = TaxIdEntity.create(props.taxId).value;
    this.props.name = NameEntity.create(props.name).value;
    this.props.birthDate = BirthDateEntity.create(props.birthDate).value;
    this.props.address = AdressEntity.create(props.address).value;
    this.props.status = props.status || UserStatus.ACTIVE;
  }

  static create(props: UserProps): Either<EntityValidationError, UserEntity> {
    try {
      const validatedProps = UserEntity.validate(props);
      return right(new UserEntity(validatedProps));
    } catch (error) {
      return left(error as EntityValidationError);
    }
  }

  static validate(props: UserProps): UserProps {
    const { name, taxId, birthDate, address, status } = props;

    const taxIdEntity = TaxIdEntity.create(taxId);

    const nameEntity = NameEntity.create(name);

    const birthDateEntity = BirthDateEntity.create(birthDate);

    const adressEntity = AdressEntity.create(address);

    if (status && !Object.values(UserStatus).includes(status)) {
      throw new EntityValidationError('Invalid status');
    }

    return {
      taxId: taxIdEntity.value,
      name: nameEntity.value,
      birthDate: birthDateEntity.value,
      address: adressEntity.value,
      status
    };
  }

  get name(): string {
    return this.props.name;
  }

  get taxId(): string {
    return this.props.taxId;
  }

  get birthDate(): Date {
    return this.props.birthDate;
  }

  get address(): string {
    return this.props.address;
  }
  get status(): UserStatus {
    return this.props.status!;
  }
}
