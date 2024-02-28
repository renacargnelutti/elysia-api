# Elysia with Bun runtime

This project is intended to be a simple and easy API for testing purposes using the Bun runtime and Elysia framework. We also use MongoDB as the database and that's why you will see we are using `mongoose` as driver, and for now it's used to validate the connection with the database.

### IMPORTANT: You will notice that we are using hardcoded values for database connection but it's just for testing purposes. Also as we are running it in Docker locally, no one will be able to access it.

## How to run it?

As we need a MongoDB instance running, we use Docker to spin up a container with the database. To do so, you can run the following command:

```bash
docker-compose up
```

After a few seconds you will see a message like this one `🦊 Elysia is running at localhost:3000`
