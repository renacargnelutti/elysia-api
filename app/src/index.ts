import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { helmet } from 'elysia-helmet';

import { API_V1_PREFIX } from './constants';

import { healthPlugin } from './features/health';

const app = new Elysia({
  prefix: API_V1_PREFIX,
})
  .use(swagger())
  .use(helmet())
  .use(healthPlugin)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
