import { useEffect } from 'react';

import { useStepStore } from '@/hooks/useStepStore';
import { FieldValues, UnpackNestedValue, useForm, UseFormReturn } from 'react-hook-form';

export interface FormData {
  isValid: boolean;
  onSubmit: () => void;
  formData: UseFormReturn<FieldValues, unknown>;
}

export function useDeclareFormData(maxSteps): FormData {
  const { setMaxSteps } = useStepStore();

  useEffect(() => {
    setMaxSteps(maxSteps);
  }, [maxSteps]);

  const formData = useForm({ mode: 'onChange', reValidateMode: 'onChange' });
  const {
    handleSubmit,
    formState: { isValid },
  } = formData;

  function mockMutationCall<TFieldValues extends FieldValues = FieldValues>(data: TFieldValues): void {
    console.log('form data:', data);
  }

  function mutateData<TFieldValues extends FieldValues = FieldValues>(
    fieldData: UnpackNestedValue<TFieldValues>,
  ): void {
    mockMutationCall(fieldData);
  }

  function onSubmit(): void {
    handleSubmit(mutateData)();
  }

  return {
    isValid,
    onSubmit,
    formData,
  };
}
