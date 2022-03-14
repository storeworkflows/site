import React from 'react';
import "./Input.scss"
import classnames from "classnames";

import { FieldRenderProps } from 'react-final-form';

interface IInput extends FieldRenderProps<string, HTMLElement, string> {
    type?: string;
    label?: string;
    id?: string;
    required?: boolean;
    placeholder?:string
}

const Input: React.FC<IInput> = ({ label, input,placeholder, required, meta }) => {
    const { name , type} = input;
    const { invalid, error, touched,visited, active } = meta;
    const localError = !!invalid && !!touched;

    const inputClasses = classnames(
        'input',
        {
            [`error`] : localError ,
            [`active`] : active && !localError && visited,
            [`visited`] : visited && !localError,
        },
    )

    return (
        <React.Fragment>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                className={inputClasses}
                placeholder={placeholder}
                required={required}
                {...input}
            />
        </React.Fragment>
    );
};

export default Input