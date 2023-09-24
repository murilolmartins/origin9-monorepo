import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UsersDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';

import prisma from '@/shared/infra/database/prisma/client';

const SeedDb = async () => {
  console.log('Seeding database...');
  const usersData = UsersDataBuilder([], 10);

  const users = usersData.map((userProps) => new UserEntity(userProps));

  await prisma.user.create({
    data: {
      id: users[0].id,
      name: users[0].name,
      taxId: users[0].taxId,
      birthDate: users[0].birthDate,
      address: users[0].address,
      status: 'INACTIVE'
    }
  });

  console.log('Database seeded!');
};

SeedDb();
