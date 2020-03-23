import React from 'react';
import { Input } from 'semantic-ui-react';

 export default class InputText extends Input {
   onChange = (e) => {
     const value = e.target.value;
     const { id, onChange, placeholder } = this.props;

     onChange({ fieldId: id, value });
   };

   render() {
     const { value, placeholder, type } = this.props;

     return (
       <Input
         value={value}
         onChange={this.onChange}
         placeholder={placeholder}
         type={type}
       />
     );
   }
 }
