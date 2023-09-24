import { UserDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';
import { UserInMemoryRepository } from '@/modules/users/infra/database/in-memory/repositories/userInMemory.repository';

import { SignupUseCase } from '../../signup.usecase';

import { BadRequestError } from '@/shared/application/errors/bad-request.error';
import { EntityValidationError } from '@/shared/domain/errors/entity-validation.error';
import { faker } from '@faker-js/faker';

describe('Signup usecase unit tests', () => {
  let sut: SignupUseCase.UseCase;
  let repository: UserInMemoryRepository;

  beforeAll(() => {
    repository = new UserInMemoryRepository();
    sut = new SignupUseCase.UseCase(repository);
  });

  it('Should return a user if data is valid', async () => {
    const spyInsert = jest.spyOn(repository, 'insert');

    const user = UserDataBuilder();

    const result = await sut.execute(user);

    expect(result.isRight()).toBeTruthy();
    expect(result.value).toBeDefined();
    expect(result.isRight() && result.value.id).toBeDefined();
    expect(result.isRight() && result.value.name).toEqual(user.name);
    expect(result.isRight() && result.value.taxId).toEqual(user.taxId);
    expect(result.isRight() && result.value.address).toEqual(user.address);
    expect(result.isRight() && result.value.birthDate).toEqual(user.birthDate);
    expect(result.isRight() && result.value.createdAt).toBeInstanceOf(Date);
    expect(result.isRight() && result.value.updatedAt).toBeInstanceOf(Date);
    expect(spyInsert).toBeCalledTimes(1);
  });

  it('Should return a BadRequestError if is missing a input field', async () => {
    const user = {
      name: faker.person.fullName()
    };

    const result = await sut.execute(user as any);

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toBeInstanceOf(BadRequestError);
    expect(result.value).toHaveProperty('message', 'Missing fields');
  });

  it('Should return a EntityValidation error if taxId is wrong', async () => {
    const user = UserDataBuilder();
    user.taxId = 'wrongtaxId';

    const result = await sut.execute(user);

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toBeInstanceOf(EntityValidationError);
    expect(result.value).toHaveProperty('message', 'Invalid tax id');
  });
});
