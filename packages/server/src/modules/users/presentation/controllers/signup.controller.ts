import type { SignupUseCase } from '../../application/usecases/signup.usecase';
import type { UserView } from '../dtos/user-view';
import { UserPresenter } from '../presenters/user.presenter';

import type { Controller as BaseController } from '@/shared/presentation/contracts/controller';
import type {
  HttpRequest,
  HttpResponse
} from '@/shared/presentation/contracts/http';
import { error, ok } from '@/shared/presentation/contracts/http';

export namespace SignUpController {
  export type Body = SignupUseCase.Input;

  export type Request = HttpRequest<Body>;

  export type Response = HttpResponse<UserView | null>;

  export class Controller implements BaseController {
    constructor(private readonly signUp: SignupUseCase.UseCase) {}
    async handle(request: Request): Promise<Response> {
      const { name, address, birthDate, taxId } = request.body;

      const response = await this.signUp.execute({
        name,
        address,
        birthDate,
        taxId
      });

      if (response.isLeft()) {
        return error(response.value, response.value.statusCode);
      }

      const userToPresent = this.toPresentation(response.value);

      return ok(userToPresent, 201);
    }

    private toPresentation(response: SignupUseCase.Output): UserView {
      return new UserPresenter(response).toPresentation();
    }
  }
}
