import type { Entity } from '../entities/entity';
import type { RepositoryInterface } from './repository-contracts';

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  public entities: E[] = [];

  async insert(entity: E): Promise<void> {
    this.entities.push(entity);
  }

  async findAll(): Promise<E[]> {
    return this.entities;
  }
}
