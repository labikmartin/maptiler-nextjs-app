'use client';

import { ApolloProvider } from '@apollo/client';
import { DialogsProvider } from '@toolpad/core';
import type { PropsWithChildren } from 'react';

import { client } from '@/common/lib/graphql';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ApolloProvider client={client}>
      <DialogsProvider>{children}</DialogsProvider>
    </ApolloProvider>
  );
}
