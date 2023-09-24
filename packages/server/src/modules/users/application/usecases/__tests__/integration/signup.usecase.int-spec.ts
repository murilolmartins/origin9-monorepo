import { UserDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';
import { UserPrismaRepository } from '@/modules/users/infra/database/prisma/repositories/user-prisma.repository';

import { SignupUseCase } from '../../signup.usecase';

import prisma from '@/shared/infra/database/prisma/client';
import type { PrismaClient } from '@prisma/client';

describe('SignupUsecase integration tests', () => {
  let prismaClient: PrismaClient;
  let sut: SignupUseCase.UseCase;
  let repository: UserPrismaRepository;

  beforeAll(async () => {
    prismaClient = prisma;
    repository = new UserPrismaRepository(prismaClient as any);
  });

  beforeEach(async () => {
    sut = new SignupUseCase.UseCase(repository);
    await prismaClient.user.deleteMany();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it('Should create an user', async () => {
    const userProps = UserDataBuilder();

    const result = await sut.execute(userProps);

    const users = await prismaClient.user.findMany();

    expect(result.isRight()).toBeTruthy();
    expect(result.value).toBeDefined();
    expect(result.isRight() && result.value.id).toBeDefined();
    expect(result.isRight() && result.value.name).toEqual(userProps.name);
    expect(result.isRight() && result.value.createdAt).toBeInstanceOf(Date);
    expect(result.isRight() && result.value.updatedAt).toBeInstanceOf(Date);
    expect(users.length).toBe(1);
    expect(result.isRight() && result.value.id).toEqual(users[0].id);
  });
});
