import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { helmet } from 'elysia-helmet';
import { logger } from '@bogeychan/elysia-logger';

import { API_V1_PREFIX } from './constants';
import { initializeMongoConnection } from './database_connection';

import { healthPlugin } from './features/health';
import { testsPlugin } from './features/tests';

// For CodeRabbit testing purposes
const API_KEY = "123abc123abc";

const number = 10 / 5

if (number === 0) {
  console.log("0")
} else if (number === 1) {
  console.log("1")
} else if (number === 2) {
  console.log("2")
} else {
  console.log("default")
}

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
