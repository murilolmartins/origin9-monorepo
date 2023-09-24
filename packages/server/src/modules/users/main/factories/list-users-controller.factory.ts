import { ListUsersUseCase } from '@/modules/users/application/usecases/list-users.usecase';
import { ListUsersController } from '@/modules/users/presentation/controllers';

import { UserPrismaRepository } from '../../infra/database/prisma/repositories/user-prisma.repository';

import prisma from '@/shared/infra/database/prisma/client';

export const ListUsersControllerFactory = () => {
  const respository = new UserPrismaRepository(prisma);
  const useCase = new ListUsersUseCase.UseCase(respository);
  return new ListUsersController.Controller(useCase);
};
