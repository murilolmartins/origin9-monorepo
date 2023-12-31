import { UserInMemoryRepository } from './in-memory/repositories/userInMemory.repository';

export enum UserRepositoryEnum {
  IN_MEMORY = 'in-memory'
}

export const UserRepositoryMap = {
  [UserRepositoryEnum.IN_MEMORY]: new UserInMemoryRepository()
};
