import Form from '@/components/Form';
import { FormDataProvider } from '@/contexts';
import { mockBackEndData } from '@/mock';

export default function Home(): JSX.Element {
  return (
    <FormDataProvider maxSteps={mockBackEndData.steps.length - 1}>
      <Form />
    </FormDataProvider>
  );
}
