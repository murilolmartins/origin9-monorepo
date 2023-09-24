import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UsersDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';
import { UserPrismaRepository } from '@/modules/users/infra/database/prisma/repositories/user-prisma.repository';

import { ListUsersUseCase } from '../../list-users.usecase';

import prisma from '@/shared/infra/database/prisma/client';
import type { PrismaClient } from '@prisma/client';

describe('ListUsersUseCase integration tests', () => {
  let prismaClient: PrismaClient;
  let sut: ListUsersUseCase.UseCase;
  let repository: UserPrismaRepository;

  beforeAll(async () => {
    prismaClient = prisma;
    repository = new UserPrismaRepository(prismaClient as any);
  });

  beforeEach(async () => {
    sut = new ListUsersUseCase.UseCase(repository);
    await prismaClient.user.deleteMany();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it('Should list users', async () => {
    const users = UsersDataBuilder([], 3).map(
      (userProps) => new UserEntity(userProps)
    );

    await prismaClient.user.createMany({
      data: users.map((user) => user.toJSON())
    });

    const result = await sut.execute();

    expect(result.isRight()).toBeTruthy();
    expect(result.isRight() && result.value).toHaveLength(3);
    expect(result.isRight() && result.value).toStrictEqual([
      users[0].toJSON(),
      users[1].toJSON(),
      users[2].toJSON()
    ]);
  });
});
