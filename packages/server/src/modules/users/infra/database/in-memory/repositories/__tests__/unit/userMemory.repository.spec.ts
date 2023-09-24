import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import {
  UserDataBuilder,
  UsersDataBuilder
} from '@/modules/users/domain/testing/helpers/user-data-builder';

import { UserInMemoryRepository } from '../../userInMemory.repository';

describe('UserMemoryRepository unit tests', () => {
  let sut: UserInMemoryRepository;

  beforeEach(() => {
    sut = new UserInMemoryRepository();
  });

  it('Should insert a user', async () => {
    const userData = UserDataBuilder();

    const user = new UserEntity(userData);

    await sut.insert(user);

    const users = await sut.findAll();

    expect(users).toHaveLength(1);
    expect(users[0]).toBeInstanceOf(UserEntity);
    expect(users[0].props).toEqual(user.props);
  });

  it('Should find all users', async () => {
    const usersData = UsersDataBuilder();

    const users = usersData.map((userData) => new UserEntity(userData));

    await Promise.all(users.map((user) => sut.insert(user)));

    const usersFound = await sut.findAll();

    expect(usersFound).toHaveLength(users.length);
    expect(usersFound).toEqual(users);
  });
});
