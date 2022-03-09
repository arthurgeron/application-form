import React from 'react';

import Form from './Form';
import { FormDataProvider } from '@/contexts';
import { mockBackEndData } from '@/mock';

export default function IndexPage(): JSX.Element {
  return (
    <FormDataProvider maxSteps={mockBackEndData.steps.length - 1}>
      <Form />
    </FormDataProvider>
  );
}
