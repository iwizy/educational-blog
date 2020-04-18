import React from 'react';
import { Input } from 'semantic-ui-react';
import style from './style.css';

 export default class InputText extends Input {
   onChange = (e) => {
     const value = e.target.value;
     const { id, onChange, placeholder } = this.props;
     onChange({ fieldId: id, value });
   };

   onBlur = () => {
     const { onBlur } = this.props;
     onBlur && onBlur();
   };

   render() {
     const { value, placeholder, type, error, icon, iconPosition, fluid } = this.props;

     return (
       <>
       <Input
         value={value}
         onChange={this.onChange}
         placeholder={placeholder}
         type={type}
         onBlur={this.onBlur}
         error={error}
         icon={icon}
         iconPosition={iconPosition}
         fluid={fluid}
       />
       <div className={style.errorHint}>{error}</div>
       </>
     );
   }
 }
