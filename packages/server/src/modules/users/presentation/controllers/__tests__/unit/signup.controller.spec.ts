import type { SignupUseCase } from '@/modules/users/application/usecases/signup.usecase';
import { UserDataBuilder } from '@/modules/users/domain/testing/helpers/user-data-builder';

import { SignUpController } from '../../signup.controller';

import { BadRequestError } from '@/shared/application/errors/bad-request.error';
import { left, right } from '@/shared/domain/contracts/either';
import { formatDateToPtBr } from '@/shared/helpers/format-date-to-pt-br';

describe('SignUpController unit tests', () => {
  let sut: SignUpController.Controller;
  let useCase: jest.Mocked<SignupUseCase.UseCase>;

  beforeEach(() => {
    useCase = {
      execute: jest.fn()
    } as any;
    sut = new SignUpController.Controller(useCase);
  });
  it('should create an user', async () => {
    const userProps = UserDataBuilder();

    const request = {
      body: userProps
    };

    const response = {
      id: 'any_id',
      name: userProps.name,
      taxId: userProps.taxId,
      birthDate: userProps.birthDate,
      address: userProps.address,
      status: userProps.status!,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    useCase.execute.mockResolvedValueOnce(Promise.resolve(right(response)));

    const result = await sut.handle(request);

    expect(result.statusCode).toBe(201);
    expect(result.body).toStrictEqual({
      id: response.id,
      name: response.name,
      taxId: response.taxId,
      birthDate: formatDateToPtBr(response.birthDate),
      address: response.address,
      status: response.status,
      createdAt: formatDateToPtBr(response.updatedAt),
      updatedAt: formatDateToPtBr(response.updatedAt)
    });
  });

  it('should return an error if useCase returns BadRequestError', async () => {
    const userProps = UserDataBuilder();

    const request = {
      body: userProps
    };

    const response = new BadRequestError('Missing fields');

    useCase.execute.mockResolvedValueOnce(Promise.resolve(left(response)));

    const result = await sut.handle(request);

    expect(result.statusCode).toBe(400);
    expect(result).toStrictEqual({
      statusCode: 400,
      message: response.message,
      error: response.name,
      body: null
    });
  });
});
