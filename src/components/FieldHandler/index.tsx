import type { AnyField } from '@/types/fields';
import { useWatch } from 'react-hook-form';
import { Input } from '@/ui/components/input';
import { CheckboxRow, Text } from '@/ui';
import { ErrorMessage } from '../ErrorMessage';
import { RadioCardList } from '../RadioCardList';

interface Props {
  data: AnyField;
}

export function FieldHandler({ data }: Props): JSX.Element {
  const watchedField = useWatch({ name: data.dependsOn ?? '' });
  if (data.dependsOn && !watchedField) {
    return null;
  }

  switch (data.type) {
    case 'Input':
      return (
        <section style={{ marginTop: 16 }}>
          <Text
            weight={700}
            style={{
              marginBottom: 12,
            }}
          >
            {data.label}
          </Text>
          <Input
            name={data.name}
            type={data.inputType}
            isRequired={data.required}
            shouldUnregister={!!data.dependsOn}
          />
          <ErrorMessage name={data.name} />
        </section>
      );
    case 'Checkbox':
      return (
        <section
          style={{
            marginTop: 16,
          }}
        >
          <CheckboxRow label={data.label} name={data.name} />
        </section>
      );
    case 'RadioCards':
      return <RadioCardList data={data} />;
    default:
      return null;
  }
}
