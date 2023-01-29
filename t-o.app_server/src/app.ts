import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import { container } from "./dependency-injection/bind";
import { resolvers } from "./resolver";

void (async () => {
  const app = express();

  // app.use(express.static("public"));

  const schema = await buildSchema({
    resolvers,
    container,
  });

  app.use(
    "/graphql",
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  const port = process.env.APP_SERVER_PORT;

  if (port === undefined) {
    throw new Error(
      "Enviroment Variable {{ APP_SERVER_PORT }} is undefined"
    );
  }

  app.listen(port, () => {
    console.log(`http://localhost:${port}/graphql`);
  });
})();
