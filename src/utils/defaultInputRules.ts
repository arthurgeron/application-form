import type { InputType } from '@/types/fields';

export function defaultInputRules(dataType: InputType, required = false) {
  return {
    validate: (value) => {
      if (value !== '') {
        if (dataType !== 'number') {
          return true;
        }
        const parsedNumber = parseInt(value, 10);
        const result = dataType === 'number' ? parsedNumber > 0 : !!value;
        return result || 'Value has to be bigger than 0.';
      }
      return required;
    },
    required: {
      value: required,
      message: `Field can't be empty.`,
    },
  };
}
