import { connectToRDB } from "../handler";
const context = require("aws-lambda-mock-context");

const ctx = context();

beforeEach(async () => {
  const currentEnv = process.env;
  process.env = {
    ...currentEnv,
    DB_HOST: "YOUR_DB_HOST",
    DB_PORT: "YOUR_DB_PORT",
    DB_USER: "YOUR_DB_USER",
    DB_PASSWORD: "YOUR_DB_PASSWORD"
  };
});

test("connectToRDB", async () => {
  const callback = (error, response) => {
    expect(error).toBe(null);
    expect(response.statusCode).toBe(200);
  };
  await connectToRDB({}, ctx, callback);
});
