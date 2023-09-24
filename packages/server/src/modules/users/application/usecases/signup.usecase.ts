import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import type { UserRepository } from '@/modules/users/domain/repositories/user.repository';

import type { UserOutput } from '../dto/user-output';
import { UserOutputMapper } from '../dto/user-output';

import { BadRequestError } from '@/shared/application/errors/bad-request.error';
import type { UseCase as BaseUseCase } from '@/shared/application/usecase/use-case';
import type { Either } from '@/shared/domain/contracts/either';
import { left, right } from '@/shared/domain/contracts/either';
import { ConflictError } from '@/shared/domain/errors/conflict.error';

export namespace SignupUseCase {
  export interface Input {
    name: string;
    taxId: string;
    birthDate: Date;
    address: string;
  }

  export type Output = UserOutput;

  export class UseCase implements BaseUseCase<Input, Output> {
    constructor(private readonly userRepository: UserRepository.Repository) {}
    async execute(
      input: Input
    ): Promise<Either<BadRequestError | ConflictError, Output>> {
      const { name, taxId, birthDate, address } = input;

      if (!name || !taxId || !birthDate || !address) {
        return left(new BadRequestError('Missing fields'));
      }

      const userExists = await this.userRepository.findByTaxId(taxId);

      if (userExists) {
        return left(new ConflictError('User already exists'));
      }

      const userOrError = UserEntity.create({
        ...input
      });

      if (userOrError.isLeft()) {
        return left(userOrError.value);
      }

      await this.userRepository.insert(userOrError.value);

      return right(UserOutputMapper.toOutput(userOrError.value));
    }
  }
}
