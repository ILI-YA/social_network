import React from 'react';
import { Field } from 'redux-form';
import s from './FormsControls.module.css';

const FormControl = ({input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + ( hasError ? s.error : ' ')}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )

}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

export const createField = (  component, validators, name, placeholder, props={}, text='' ) => {
    return <div>
        <Field component={component} 
            validate={validators} 
            name={name} 
            placeholder={placeholder} 
            {...props}
            /> {text}
    </div>
}