export type InputType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'email'
  | 'tel'
  | 'select'
  | 'date'
  | 'search'
  | 'react-select'
  | 'password';

export interface BaseField {
  name: string;
  dependsOn?: string;
  required?: boolean;
}

export interface InputField extends BaseField {
  type: 'Input';
  inputType: InputType;
  label: string;
}

export interface Checkbox extends BaseField {
  type: 'Checkbox';
  label: string;
}

export interface Checkbox extends BaseField {
  type: 'Checkbox';
  label: string;
}

export interface RadioCard {
  label: string;
  description: string;
  recommended?: boolean;
}

export interface RadioCards extends BaseField {
  type: 'RadioCards';
  options: RadioCard[];
}

export type AnyField = InputField | RadioCards | Checkbox;
