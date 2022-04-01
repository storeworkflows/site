import React, {FC} from "react";
import "./ContactForm.scss";

import {composeValidators, email, required} from "./utils";

import {Field, Form} from "react-final-form";
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";

import {IContactForm} from "../../types/interfaces/IContactForm";


const ContactForm: FC<IContactForm> = ({onSubmit}): JSX.Element=>{
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine,values }) => (
                <form className="form" onSubmit={event => {
                    handleSubmit(event)?.then(() => {
                        form.reset()
                        for (const key in values) {
                            // @ts-ignore
                            form.resetFieldState(key)
                        }
                    })
                }}
                >
                    <div className="field">
                        <Field<string>
                            name="firstName"
                            validate={required}
                            placeholder="First Name"
                            component={Input}
                        />
                    </div>
                    <div className="field">
                        <Field<string>
                            name="lastName"
                            validate={required}
                            placeholder="Last Name"
                            component={Input}
                        />

                    </div>
                    <div className="field">
                        <Field<string>
                            type="email"
                            name="businessemail"
                            placeholder="Business e-mail"
                            validate={composeValidators(required,email)}
                            component={Input}
                        />
                    </div>
                    <div className="field">
                        <Field<string>
                            name="message"
                            validate={required}
                            component={Textarea}
                            placeholder="Your massage:"
                        />
                    </div>
                    <Button className={"form-button"} text={"Send"} disabled={submitting}/>

                </form>
            )}
        />
    )
}

export default ContactForm