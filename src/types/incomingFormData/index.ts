import type { AnyField } from '@/types/fields';

export interface Step {
  title: string;
  description?: string;
  fields: AnyField[];
}

export interface IncomingFormData {
  steps: Step[];
}
