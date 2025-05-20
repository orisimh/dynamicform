
import { FieldErrors, UseFormRegister } from 'react-hook-form';


export interface RuleDefinition {
  value: any;
  error_message: string;
}

export interface FieldRules {
  required?: RuleDefinition;
  min?: RuleDefinition;
  max?: RuleDefinition;
  regex?: RuleDefinition;
}


export interface FieldGroup {
  title: string;
  fields: FormField[];
}

export type FormData = Record<string, string | number | boolean>;


// ############ Field Types ######################

export interface FormField {
  type: 'input' | 'input_number' | 'select' | 'textarea';
  label: string;
  rules: FieldRules;
  options?: FieldOption[];
}

export interface FieldOption {
  key: string;
  value: string;
}

export interface DynamicFieldProps {
  field: FormField;
  index: number;
  register: UseFormRegister<any>; 
  errors: FieldErrors<any>;       
}