import type { UserStatus } from '@/modules/users/domain/entities/user.entity';
import { UserEntity } from '@/modules/users/domain/entities/user.entity';

import type { User } from '@prisma/client';

export class UserModelMapper {
  static toEntity(user: User) {
    return new UserEntity({
      id: user.id,
      name: user.name,
      taxId: user.taxId,
      birthDate: user.birthDate,
      address: user.address,
      status: user.status as UserStatus,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  }
}
