import { buildApp } from './app';
import { envVars } from './config/env';

import prisma from '@/shared/infra/database/prisma/client';

async function start(): Promise<void> {
  const app = buildApp();

  app.listen({ port: envVars.APP_PORT, host: '0.0.0.0' }, () => {
    console.log(`🚀 Server ready at http://localhost:${envVars.APP_PORT}`);
  });
}

start()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
