import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { helmet } from 'elysia-helmet';
import { logger } from '@bogeychan/elysia-logger';

import { API_V1_PREFIX } from './constants';
import { initializeMongoConnection } from './database_connection';

import { healthPlugin } from './features/health';
import { testsPlugin } from './features/tests';

(async () => {
  await initializeMongoConnection();

  const app = new Elysia({
    prefix: API_V1_PREFIX,
  })
    .use(swagger())
    .use(helmet())
    .use(logger())
    .use(healthPlugin)
    .use(testsPlugin)
    .listen(3000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
  );
})();
