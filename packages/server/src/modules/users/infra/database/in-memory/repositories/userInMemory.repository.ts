import type { UserEntity } from '@/modules/users/domain/entities/user.entity';
import type { UserRepository } from '@/modules/users/domain/repositories/user.repository';

export class UserInMemoryRepository implements UserRepository.Repository {
  public readonly users: UserEntity[] = [];

  async insert(entity: UserEntity): Promise<void> {
    this.users.push(entity);
  }
  async findAll(): Promise<UserEntity[]> {
    return this.users;
  }
  async findByTaxId(taxId: string): Promise<UserEntity | null> {
    const user = this.users.find((user) => user.props.taxId === taxId);

    if (!user) return null;

    return user;
  }
}
