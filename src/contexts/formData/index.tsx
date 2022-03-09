import { createContext, useContext, ReactNode } from 'react';
import { useDeclareFormData, FormData } from '@/hooks/useDeclareFormData';
import { FormProvider } from 'react-hook-form';

const FormDataContext = createContext<FormData | undefined>(undefined);

interface Props {
  children: ReactNode;
  maxSteps: number;
}

export function FormDataProvider({ children, maxSteps }: Props): JSX.Element {
  const value = useDeclareFormData(maxSteps);

  return (
    <FormProvider {...value.formData}>
      <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>
    </FormProvider>
  );
}

export function useFormData(): FormData {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }

  return context;
}
