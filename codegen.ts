import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql", // graphql server url
  documents: "./graphql/gql/**/*.gql", // path to my .graphql that used for query & mutation
  generates: {
    // key represents an output path for the generated code ("./graphql/codegen/")
    // value represents options for the generated code
    "./graphql/codegen/": {
      preset: "client",
      plugins: [],
    },
  },
  overwrite: true, // overwrite files if they already exist when generating code
}

export default config
