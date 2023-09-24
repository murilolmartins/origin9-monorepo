import type { Controller } from '@/shared/presentation/contracts/controller';
import type { Request, Response } from 'express';

export const expressControllerAdapter = (controller: Controller) => {
  return async (request: Request, response: Response): Promise<void> => {
    const httpRequest = {
      body: request.body ?? {},
      params: request.params ?? {}
    };

    const httpResponse = await controller.handle(httpRequest);

    response.status(httpResponse.statusCode).send(httpResponse);
  };
};
