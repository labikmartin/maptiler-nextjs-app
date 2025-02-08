import {
  createSchema,
  createYoga,
  type YogaSchemaDefinition,
} from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import {
  createEntity,
  deleteEntity,
  EntitySchema,
  getEntities,
  getEntity,
  updateEntity,
} from '@/features/entity';

import { entitiesDb } from './db';

const resolvers = {
  Query: {
    entities: getEntities(entitiesDb),
    entity: getEntity(entitiesDb),
  },
  Mutation: {
    createEntity: createEntity(entitiesDb),
    updateEntity: updateEntity(entitiesDb),
    deleteEntity: deleteEntity(entitiesDb),
  },
};

type Schema =
  | YogaSchemaDefinition<{ req: NextApiRequest; res: NextApiResponse }, object>
  | undefined;

const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;
const schema: Schema = createSchema({ typeDefs: EntitySchema, resolvers });

const yoga = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint,
});

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  return yoga(request, response);
}
