'use client';

import { DialogsProvider } from '@toolpad/core';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <DialogsProvider>{children}</DialogsProvider>;
}
