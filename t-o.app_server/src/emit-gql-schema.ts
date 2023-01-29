import { emitSchemaDefinitionFile, buildSchema } from "type-graphql";
import { resolvers } from "./resolver";

(async () => {
    const schema = await buildSchema({
        resolvers
    });
    await emitSchemaDefinitionFile("./schema/am-schema.gql", schema);
}
)();