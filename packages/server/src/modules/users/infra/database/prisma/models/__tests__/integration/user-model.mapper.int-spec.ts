import { UserEntity } from '@/modules/users/domain/entities/user.entity';

import { UserModelMapper } from '../../user-model.mapper';

import prisma from '@/shared/infra/database/prisma/client';
import type { PrismaClient, User } from '@prisma/client';
import { cpf } from 'cpf-cnpj-validator';
import { randomUUID } from 'crypto';

describe('UserModelMapper integration tests', () => {
  let prismaClient: PrismaClient;
  let user: User;

  beforeAll(async () => {
    prismaClient = prisma;
    prismaClient.$connect();
  });

  beforeEach(async () => {
    await prismaClient.user.deleteMany();
    user = await prismaClient.user.create({
      data: {
        id: randomUUID(),
        name: 'any_name',
        taxId: cpf.generate(),
        birthDate: new Date(),
        address: 'any_address',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  test('should return a UserEntity', () => {
    const sut = UserModelMapper.toEntity(user);

    expect(sut).toBeInstanceOf(UserEntity);
    expect(sut).toHaveProperty('id');
    expect(sut).toHaveProperty('name', user.name);
    expect(sut).toHaveProperty('taxId', user.taxId);
    expect(sut).toHaveProperty('birthDate', user.birthDate);
    expect(sut).toHaveProperty('address', user.address);
    expect(sut).toHaveProperty('createdAt', user.createdAt);
    expect(sut).toHaveProperty('updatedAt', user.updatedAt);
  });
});
