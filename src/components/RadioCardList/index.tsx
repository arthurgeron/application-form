import type { RadioCards } from '@/types/fields';
import { Badge, InteractiveCard, Padding, RadioButton, Text } from '@/ui';
import { useController } from 'react-hook-form';

interface Props {
  data: RadioCards;
}

export function RadioCardList({ data }: Props): JSX.Element {
  const { name, dependsOn } = data;

  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
    defaultValue: 0,
    shouldUnregister: !!dependsOn,
  });

  return (
    <>
      {data.options.map((option, index) => {
        function onClick(): void {
          onChange(index);
          onBlur();
        }
        return (
          <InteractiveCard
            key={option.label}
            onClick={onClick}
            style={{
              marginBottom: 11,
            }}
          >
            <Padding left={24} top={24} bottom={24}>
              <RadioButton name={option.label} weight={600} isChecked={index === value} label={option.label} />
              <Text
                style={{
                  marginLeft: 29,
                }}
              >
                {option.description}
              </Text>
              {!!option.recommended && (
                <div
                  style={{
                    marginTop: 16,
                    marginLeft: 29,
                  }}
                >
                  <Badge type="success" textType="small-caps">
                    RECOMMENDED
                  </Badge>
                </div>
              )}
            </Padding>
          </InteractiveCard>
        );
      })}
    </>
  );
}
