import { SignupUseCase } from '@/modules/users/application/usecases/signup.usecase';
import { SignUpController } from '@/modules/users/presentation/controllers';

import { UserPrismaRepository } from '../../infra/database/prisma/repositories/user-prisma.repository';

import prisma from '@/shared/infra/database/prisma/client';

export const SignUpControllerFactory = () => {
  const repository = new UserPrismaRepository(prisma);
  const useCase = new SignupUseCase.UseCase(repository);
  return new SignUpController.Controller(useCase);
};
