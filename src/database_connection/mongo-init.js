/* eslint-disable no-undef */

// TODO: use environment variables

db.createUser({
  user: 'mongo_user',
  pwd: 'mongo_password',
  roles: [
    {
      role: 'readWrite',
      db: 'test_db',
    },
  ],
});
