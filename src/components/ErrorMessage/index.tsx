import { Text } from '@/ui';
import { useFormState } from 'react-hook-form';

interface Props {
  name: string;
}

export function ErrorMessage({ name }: Props): JSX.Element {
  const { errors } = useFormState();
  const hasError = !!errors?.[name]?.message;

  if (!hasError) {
    return null;
  }

  return (
    <Text size="regular" color="error">
      {errors[name].message}
    </Text>
  );
}
