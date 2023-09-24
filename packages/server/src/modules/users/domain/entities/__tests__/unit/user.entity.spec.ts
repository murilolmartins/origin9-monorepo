import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';
import type { UserProps } from '../../user.entity';
import { UserEntity } from '../../user.entity';

import { stat } from 'fs';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(async () => {
    props = UserDataBuilder();

    sut = new UserEntity(props);
  });

  it('Instance class', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.taxId).toEqual(props.taxId);
    expect(sut.props.address).toEqual(props.address);
    expect(sut.props.birthDate).toEqual(props.birthDate);
    expect(sut.props.status).toEqual(props.status);
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.updatedAt).toBeInstanceOf(Date);
    expect(sut.id).toBeDefined();
  });

  test('Create method', () => {
    UserEntity.validate = jest.fn().mockReturnValue({
      name: props.name,
      taxId: props.taxId,
      address: props.address,
      birthDate: props.birthDate,
      status: props.status
    });
    const user = UserEntity.create(props);

    expect(user.isRight()).toBeTruthy();
    expect(user.value).toBeInstanceOf(UserEntity);
    expect(user.isRight() && user.value.props.taxId).toEqual(props.taxId);
    expect(user.isRight() && user.value.props.name).toEqual(props.name);
    expect(user.isRight() && user.value.props.birthDate).toEqual(
      props.birthDate
    );
    expect(user.isRight() && user.value.props.address).toEqual(props.address);
    expect(user.isRight() && user.value.props.status).toEqual(props.status);
    expect(user.isRight() && user.value.id).toBeDefined();
    expect(user.isRight() && user.value.createdAt).toBeInstanceOf(Date);
    expect(user.isRight() && user.value.updatedAt).toBeInstanceOf(Date);
    expect(UserEntity.validate).toBeCalledTimes(1);
    expect(UserEntity.validate).toBeCalledWith(props);
  });
});
