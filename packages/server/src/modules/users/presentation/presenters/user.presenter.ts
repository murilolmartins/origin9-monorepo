import type { UserOutput } from '../../application/dto/user-output';
import type { UserView } from '../dtos/user-view';

import { formatDateToPtBr } from '@/shared/helpers/format-date-to-pt-br';

export class UserPresenter {
  public readonly id: string;
  public readonly name: string;
  public readonly taxId: string;
  public readonly birthDate: string;
  public readonly address: string;
  public readonly status: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;

  constructor(public readonly user: UserOutput) {
    this.id = user.id;
    this.name = user.name;
    this.taxId = user.taxId;
    this.birthDate = formatDateToPtBr(user.birthDate);
    this.address = user.address;
    this.status = user.status;
    this.createdAt = formatDateToPtBr(user.createdAt);
    this.updatedAt = formatDateToPtBr(user.updatedAt);
  }
  toPresentation(): UserView {
    return {
      id: this.id,
      name: this.name,
      taxId: this.taxId,
      birthDate: this.birthDate,
      address: this.address,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
