import type { Entity } from '../entities/entity';

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  findAll(): Promise<E[]>;
}
