export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  errors?:string[],
  type: 'text' | 'number' | 'select' | 'email' | 'textarea' | 'password',
  element: 'input' | 'select' | 'button' | 'textarea',
  value?: any,
  validators: object
}