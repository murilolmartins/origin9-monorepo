import type { UserOutput } from '@/modules/users/application/dto/user-output';
import { UserStatus } from '@/modules/users/domain/entities/user.entity';

import { UserPresenter } from '../user.presenter';

import { formatDateToPtBr } from '@/shared/helpers/format-date-to-pt-br';

describe('UserPresenter unit test', () => {
  it('should return a serialized user', () => {
    const user: UserOutput = {
      id: '1',
      name: 'John Doe',
      taxId: '12345678910',
      birthDate: new Date(),
      address: 'Rua dos bobos, nº 0',
      status: UserStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const userToPresent = new UserPresenter(user);

    expect(userToPresent.toPresentation()).toEqual({
      id: '1',
      name: 'John Doe',
      taxId: '12345678910',
      birthDate: formatDateToPtBr(user.birthDate),
      address: user.address,
      status: user.status,
      createdAt: formatDateToPtBr(user.createdAt),
      updatedAt: formatDateToPtBr(user.updatedAt)
    });
  });
});
