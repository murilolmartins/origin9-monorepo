import type { UserOutput } from '../../application/dto/user-output';
import type { UserView } from '../dtos/user-view';

import { formatDateToPtBr } from '@/shared/helpers/format-date-to-pt-br';

export class UsersPresenter {
  public readonly data: UserView[];

  constructor(public readonly users: UserOutput[]) {
    this.data = users.map(
      (user) =>
        ({
          id: user.id,
          name: user.name,
          taxId: user.taxId,
          birthDate: formatDateToPtBr(user.birthDate),
          address: user.address,
          status: user.status,
          createdAt: formatDateToPtBr(user.createdAt),
          updatedAt: formatDateToPtBr(user.updatedAt)
        } as UserView)
    );
  }
  toPresentation(): UserView[] {
    return this.data;
  }
}
