    import React from 'react';
    import { ErrorProps } from '../../../types/Common/Error';
    import '../../../styles/Common/Error/main.scss';



    const Error: React.FC<ErrorProps> = ({message}) => {
      
    
      return <p className="error"> {message } </p>

      }

      export default Error;
