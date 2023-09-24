import type { UserEntity } from '@/modules/users/domain/entities/user.entity';
import type { UserRepository } from '@/modules/users/domain/repositories/user.repository';

import { UserModelMapper } from '../models/user-model.mapper';

import type { PrismaClient } from '@prisma/client';

export class UserPrismaRepository implements UserRepository.Repository {
  constructor(private readonly prismaService: PrismaClient) {}
  async findAll(): Promise<UserEntity[]> {
    const users = await this.prismaService.user.findMany();

    return users.map(UserModelMapper.toEntity);
  }

  async insert(entity: UserEntity): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: entity.id,
        name: entity.props.name,
        taxId: entity.props.taxId,
        birthDate: entity.props.birthDate,
        address: entity.props.address
      }
    });
  }

  async findByTaxId(taxId: string): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        taxId
      }
    });

    if (!user) return null;

    return UserModelMapper.toEntity(user);
  }
}
