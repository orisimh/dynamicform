  
import { FormField } from '../../../types/Common/DynamicForm';
import { parseMessage } from './parse';


  export const getValidation = (rules: FormField['rules']) => {
    const validations: any = {};
    if (rules.required?.value) validations.required = rules.required.error_message;
    if (rules.min?.value) validations.minLength = {
      value: rules.min.value,
      message: parseMessage(rules.min.error_message, rules.min.value),
    };
    if (rules.max?.value) validations.maxLength = {
      value: rules.max.value,
      message: parseMessage(rules.max.error_message, rules.max.value),
    };
    if (rules.regex?.value) validations.pattern = {
      value: new RegExp(rules.regex.value),
      message: rules.regex.error_message,
    };
    return validations;
  };