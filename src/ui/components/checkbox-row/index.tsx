import React from 'react';
import { Flexbox } from '../flexbox';
import { Checkbox } from '../checkbox';
import { Text } from '../text';
import { Padding } from '../padding';
import { useController } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  disabled?: boolean;
  count?: number;
  testId?: string;
}

export function CheckboxRow(props: Props): JSX.Element {
  const { label, disabled, count, testId, name } = props;

  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
    shouldUnregister: true,
  });

  function handleClick(checked: boolean): void {
    onChange(checked);
    onBlur();
  }

  return (
    <Flexbox>
      <Checkbox testId={testId} isActive={!!value} onClick={handleClick} disabled={disabled} />
      <Padding left={8} right={4}>
        <Text color={disabled ? 'light' : 'default'}>{label}</Text>
      </Padding>
      {count ? <Text color="light">({count})</Text> : null}
    </Flexbox>
  );
}
