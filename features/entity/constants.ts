import { z } from 'zod';

export const statusVariants = ['NONE', 'NEW', 'DEPRECATED'] as const;
export const statusSchema = z.enum(statusVariants);
export const StatusEnum = statusSchema.Enum;
