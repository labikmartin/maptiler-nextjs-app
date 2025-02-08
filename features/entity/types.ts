import type { z } from 'zod';

import type { statusSchema } from '@/features/entity/constants';

export type Status = z.infer<typeof statusSchema>;

export interface Entity {
  id: string;
  name: string;
  status: Status;
}

export interface CreateEntityFormValues {
  name: string;
  status: Status;
}
