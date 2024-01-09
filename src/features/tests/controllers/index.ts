import { Elysia } from 'elysia';

// TODO: This will be changed, it's just for testing purposes

import { TestModel } from './../models/test';

export const testsPlugin = new Elysia().get('/tests', async () => {
  // await TestModel.create({
  //   name: `Test ${Math.random()}`,
  // });

  const tests = await TestModel.find({});

  return {
    success: true,
    tests,
  };
});
