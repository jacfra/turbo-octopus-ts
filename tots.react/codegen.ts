import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

const config: CodegenConfig = {
    schema: `http://localhost:${process.env.GQL_PORT}/graphql`,
    documents: ['src/**/*.tsx', '!src/gql/**/*'],
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: []
        }
    }
}
export default config