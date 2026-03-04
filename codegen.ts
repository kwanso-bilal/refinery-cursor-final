import type { CodegenConfig } from '@graphql-codegen/cli';

const schemaUrl =
  process.env.VITE_GRAPHQL_HTTP_URI ??
  'https://api.app-stage.tracking-unlimited.com/graphql';

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    'src/generated/graphql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
