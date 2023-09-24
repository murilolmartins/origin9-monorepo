import type { ListUsersUseCase } from '../../application/usecases/list-users.usecase';
import type { UserView } from '../dtos/user-view';
import { UsersPresenter } from '../presenters/users.presenter';

import type { Controller as BaseController } from '@/shared/presentation/contracts/controller';
import type {
  HttpRequest,
  HttpResponse
} from '@/shared/presentation/contracts/http';
import { ok, serverError } from '@/shared/presentation/contracts/http';

export namespace ListUsersController {
  export type Body = ListUsersUseCase.Input;

  export type Request = HttpRequest<Body>;

  export type Response = HttpResponse<UserView[] | null>;

  export class Controller implements BaseController {
    constructor(private readonly ListUsers: ListUsersUseCase.UseCase) {}
    async handle(_: Request): Promise<Response> {
      const response = await this.ListUsers.execute();

      if (response.isLeft()) {
        return serverError(new Error('Internal Server Error'));
      }

      const userListToPresent = this.toPresentation(response.value);

      return ok(userListToPresent, 200);
    }

    private toPresentation(response: ListUsersUseCase.Output): UserView[] {
      return new UsersPresenter(response).toPresentation();
    }
  }
}
