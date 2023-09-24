import type { UserEntity, UserStatus } from '../../domain/entities/user.entity';

export type UserOutput = {
  id: string;
  name: string;
  taxId: string;
  birthDate: Date;
  address: string;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
};

export class UserOutputMapper {
  static toOutput(user: UserEntity): UserOutput {
    return {
      id: user.id,
      name: user.name,
      taxId: user.taxId,
      birthDate: user.birthDate,
      address: user.address,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }
}
