import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      context: ({ req, res }) => ({ req, res }),
      typePaths: ['./src/**/*.graphql', './src/graphql/**/*.graphql', './src/*/*.graphql'], // path for gql schema files
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        path: join(process.cwd(), './src/graphql/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: false,
    };
  }
}
