import { Client } from "pg";

export const hello = (_event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!"
    })
  });
};

export const helloWithException = (_event, _context, callback) => {
  throw new Error("Uncaught Exception!");
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!"
    })
  });
};

export const connectToRDB = async (_event, _context, callback) => {
  const pgClient = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
  await pgClient.connect();
  const res = await pgClient.query("SELECT current_timestamp");
  await callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: JSON.stringify(res)
    })
  });
};
