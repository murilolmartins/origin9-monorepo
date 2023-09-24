import type { UserEntity } from '../entities/user.entity';

import type { RepositoryInterface } from '@/shared/domain/repositories/repository-contracts';

export namespace UserRepository {
  export interface Repository extends RepositoryInterface<UserEntity> {
    findByTaxId(taxId: string): Promise<UserEntity | null>;
  }
}
