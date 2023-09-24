import { UserStatus, type UserProps } from '../../entities/user.entity';

import { faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';

export const UserDataBuilder = (data?: Partial<UserProps>): UserProps => ({
  name: faker.person.fullName(),
  taxId: cpf.generate(),
  birthDate: new Date(),
  address: faker.location.streetAddress(),
  status: faker.helpers.arrayElement([UserStatus.ACTIVE, UserStatus.INACTIVE]),
  ...data
});

export const UsersDataBuilder = (
  data = [] as Partial<UserProps>[],
  quantity = 5
): UserProps[] =>
  data.length
    ? data.map((user) => UserDataBuilder(user))
    : Array.from({ length: quantity }, () => UserDataBuilder());
