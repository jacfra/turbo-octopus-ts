import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import { container } from "./dependency-injection/bind";
import { resolvers } from "./resolver";
import cors from "cors";

void (async () => {
  const app = express();

  // app.use(express.static("public"));

  const schema = await buildSchema({
    resolvers,
    container,
  });

  app.use(cors());
  app.use(
    "/graphql",
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  const portVarName = "REACT_APP_GRAPHQL_PORT";

  const port = process.env[portVarName];

  if (port === undefined) {
    throw new Error(`Enviroment Variable {{ ${portVarName} }} is undefined`);
  }

  app.listen(port, () => {
    console.log(`http://localhost:${port}/graphql`);
  });
})();
