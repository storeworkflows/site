import React from 'react';
import "./Textarea.scss"
import classnames from "classnames";

import { FieldRenderProps } from 'react-final-form';



interface ITextarea extends FieldRenderProps<string, HTMLElement, string> {
    label?: string;
    id?: string;
    required?: boolean;
    placeholder?:string
}

const Textarea: React.FC<ITextarea> = ({ id,label, input,placeholder, required, meta }) => {
    const { name } = input;
    const { invalid, error, touched,visited,active } = meta;
    const localError = !!invalid && !!touched;

    const inputClasses = classnames(
        'textarea',
        {
            [`error`] : localError,
            [`active`] : active && !localError && visited,
            [`visited`] : visited && !localError,
        },
    )

    return (
        <React.Fragment>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                id={id}
                className={inputClasses}
                placeholder={placeholder}
                required={required}
                {...input}
            />
        </React.Fragment>
    );
};

export default Textarea