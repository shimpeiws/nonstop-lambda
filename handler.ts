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
