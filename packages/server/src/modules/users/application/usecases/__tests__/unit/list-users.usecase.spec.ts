import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UsersDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';
import { UserInMemoryRepository } from '@/modules/users/infra/database/in-memory/repositories/userInMemory.repository';

import { ListUsersUseCase } from '../../list-users.usecase';

describe('ListUserUseCase unit tests', () => {
  let sut: ListUsersUseCase.UseCase;
  let repository: UserInMemoryRepository;

  beforeEach(() => {
    repository = new UserInMemoryRepository();
    sut = new ListUsersUseCase.UseCase(repository);
  });

  it('Should return a list of users', async () => {
    const usersProps = UsersDataBuilder();

    const users = usersProps.map((userProps) => new UserEntity(userProps));

    users.forEach((user) => {
      repository.users.push(user);
    });

    const result = await sut.execute();

    expect(result.isRight()).toBeTruthy();
    expect(result.isRight() && result.value).toHaveLength(5);
    expect(result.isRight() && result.value[0]).toStrictEqual(
      users[0].toJSON()
    );
  });
});
