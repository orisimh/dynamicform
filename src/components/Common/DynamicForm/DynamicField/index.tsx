
import React from 'react';
import { FormField, DynamicFieldProps } from '../../../../models/Common/DynamicForm';
import { getValidation } from '../../../../utils/Common/DynamicForm/validate';



const DynamicField: React.FC<DynamicFieldProps> = ({ field, index, register, errors }) => {
  

  const registerOptions = getValidation(field.rules);

  const renderError = () =>
    errors[field.label] && (
      <p className="error">{errors[field.label]?.message as string}</p>
    );

  switch (field.type) {
    case 'input':
    case 'input_number':
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <input
            type={field.type === 'input' ? 'text' : 'number'}
            {...register(field.label, registerOptions)}
            aria-invalid={!!errors[field.label]}
          />
          {renderError()}
        </div>
      );
    case 'textarea':
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <textarea {...register(field.label, registerOptions)} aria-invalid={!!errors[field.label]} />
          {renderError()}
        </div>
      );
    case 'select':
      return (
        <div className="form-group" key={field.label}>
          <label>{field.label}</label>
          <select {...register(field.label, registerOptions)} aria-invalid={!!errors[field.label]}>
            <option value="">Select an option</option>
            {field.options?.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.key}
              </option>
            ))}
          </select>
          {renderError()}
        </div>
      );
    default:
      return null;
  }
};

export default DynamicField;