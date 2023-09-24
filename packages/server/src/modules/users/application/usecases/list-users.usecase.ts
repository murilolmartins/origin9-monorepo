import type { UserRepository } from '@/modules/users/domain/repositories/user.repository';

import type { UserOutput } from '../dto/user-output';
import { UserOutputMapper } from '../dto/user-output';

import type { UseCase as BaseUseCase } from '@/shared/application/usecase/use-case';
import type { Either } from '@/shared/domain/contracts/either';
import { right } from '@/shared/domain/contracts/either';

export namespace ListUsersUseCase {
  export type Input = void;

  export type Output = UserOutput[];

  export class UseCase implements BaseUseCase<Input, Output> {
    constructor(private readonly repository: UserRepository.Repository) {}
    async execute(): Promise<Either<void, Output>> {
      const users = await this.repository.findAll();

      return right(users.map(UserOutputMapper.toOutput));
    }
  }
}
