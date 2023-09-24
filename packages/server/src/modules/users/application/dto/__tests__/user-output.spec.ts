import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UserDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';

import { UserOutputMapper } from '../user-output';

describe('UserOutoutMapper unit tests', () => {
  it('Should return a UserOutput', () => {
    const userProps = UserDataBuilder();

    const user = new UserEntity(userProps);

    const result = UserOutputMapper.toOutput(user);

    expect(result).toStrictEqual({
      id: user.id,
      name: user.props.name,
      taxId: user.props.taxId,
      birthDate: user.props.birthDate,
      address: user.props.address,
      status: user.props.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  });
});
