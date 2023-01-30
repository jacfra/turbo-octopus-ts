/* eslint-disable @typescript-eslint/no-floating-promises */
import { emitSchemaDefinitionFile, buildSchema } from "type-graphql";
import { resolvers } from "./resolver";

(async () => {
  const schema = await buildSchema({
    resolvers,
  });
  await emitSchemaDefinitionFile("./schema/schema.gql", schema);
})();
