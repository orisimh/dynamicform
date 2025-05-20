import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FieldGroup, FormField, FormData } from '../../../types/Common/DynamicForm';
import  DynamicField  from './DynamicField';
import { SCHEMA_URL } from '../../../config/api';
import '../../../styles/Common/DynamicForm/main.scss';
import  Modal  from '../Modal';
import  Error  from '../Error';


const DynamicForm: React.FC = () => {
  

const [modalOpen, setModalOpen] = useState(false);
const [submittedData, setSubmittedData] = useState<FormData>({});;
const [schema, setSchema] = useState<FieldGroup[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });



  useEffect(() => {

    const fetchSchema = async () => {
    try {
      const res = await fetch(SCHEMA_URL);
      const data = await res.json();
      setSchema(data);
    } catch (err) {
      console.error('Failed to load schema', err);
      setError('Could not fetch schema.');
    } finally {
      setLoading(false);
    }
  };

  fetchSchema();

  }, []);

    
  const onSubmit: SubmitHandler<FormData>   = (data: FormData) => {
    setSubmittedData(data);
    setModalOpen(true);
  };



  return (
    
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">

        {error && <Error message={error} /> }
        {loading ? <p>Loading...</p> : schema.map((group, i) => (
          <div className="form-section" key={i}>
            <h3>{group.title}</h3>
            {group.fields.map((field: FormField, index: number) => 
              <DynamicField 
                  key={`${group.title}-${index}`} 
                  field={field} 
                  index={index} 
                  register={register} errors={errors}
              /> 
            )} 
          </div>
        ))}
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={submittedData} modalHeader="Created Data" />
    </>
  );
};

export default DynamicForm;