import { InMemoryRepository } from '../../in-memory-repository';

import { Entity } from '@/shared/domain/entities/entity';

interface StubProps {
  name: string;
  price: number;
}

class StubEntity extends Entity<StubProps> {
  constructor(public readonly props: StubProps, id?: string) {
    super(props, id);
  }
}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepository;

  beforeEach(() => {
    sut = new StubInMemoryRepository();
  });

  test('Insert entity', async () => {
    const props = {
      name: 'any_name',
      price: 10
    };

    const entity = new StubEntity(props);

    await sut.insert(entity);

    expect(sut.entities).toHaveLength(1);
    expect(sut.entities[0].toJSON()).toStrictEqual(entity.toJSON());
  });

  test('Find all entities', async () => {
    const props = {
      name: 'any_name',
      price: 10
    };

    const entity = new StubEntity(props);

    await sut.insert(entity);

    const result = await sut.findAll();

    expect(result).toStrictEqual([entity]);
  });
});
