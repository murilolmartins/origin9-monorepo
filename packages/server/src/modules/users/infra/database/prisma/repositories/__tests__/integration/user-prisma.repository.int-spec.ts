import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import {
  UserDataBuilder,
  UsersDataBuilder
} from '@/modules/users/domain/testing/helpers/user-data-builder';

import { UserPrismaRepository } from '../../user-prisma.repository';

import prisma from '@/shared/infra/database/prisma/client';
import type { PrismaClient } from '@prisma/client';

describe('UserPrismaRepository integration tests', () => {
  let prismaClient: PrismaClient;
  let sut: UserPrismaRepository;

  beforeAll(async () => {
    prismaClient = prisma;
  });

  beforeEach(async () => {
    sut = new UserPrismaRepository(prismaClient as any);
    await prismaClient.user.deleteMany();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  describe('Insert method', () => {
    it('should insert an user', async () => {
      const userProps = UserDataBuilder();

      const entity = new UserEntity(userProps);

      await sut.insert(entity);

      const users = await prismaClient.user.findMany();

      expect(users.length).toBe(1);
      expect(users[0]).toHaveProperty('id', entity.id);
    });
  });

  describe('FindAll method', () => {
    it('should return all users', async () => {
      const users = UsersDataBuilder().map(
        (userProps) => new UserEntity(userProps)
      );

      await prismaClient.user.createMany({
        data: users.map((user) => user.toJSON())
      });

      const result = await sut.findAll();

      expect(result).toHaveLength(users.length);

      result.forEach((user, index) => {
        expect(user.toJSON()).toMatchObject(users[index].toJSON());
      });
    });
  });
});
