import { UUIDHelper } from '../helpers/uuid.helper';

export class Entity<T = any> {
  constructor(
    public readonly props: T,
    public readonly id: string = UUIDHelper.generate(),
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {
    this.props = props;
    this.id = UUIDHelper.validate(id) ? id : UUIDHelper.generate();
  }

  toJSON(): T & { id: string; createdAt: Date; updatedAt: Date } {
    return {
      ...this.props,
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
