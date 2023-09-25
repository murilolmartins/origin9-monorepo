import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UsersDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';

import prisma from '@/shared/infra/database/prisma/client';

const SeedDb = async () => {
  console.log('Seeding database...');
  const usersData = UsersDataBuilder([], 10);

  const users = usersData.map((userProps) => new UserEntity(userProps));

  await prisma.user.createMany({
    data: users.map((user) => user.toJSON())
  });

  console.log('Database seeded!');
};

SeedDb();
