import userRouter from '@/modules/users/main/routes/users.router';

import type { Application } from 'express';

const AppRoutes = (app: Application) => {
  app.use('/users', userRouter);
};

export { AppRoutes };
