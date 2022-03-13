import React from "react";
import "./contactUs.scss";

import { Form, Field } from 'react-final-form'
import axios, {AxiosResponse} from "axios";

import Button from "../Button/Button";
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import {composeValidators, email, required} from "./utils";


const token = '1/1201472437093173:891f86e59c48144f242d26887b76062f'
const instance = axios.create({
    baseURL: 'https://app.asana.com',
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});


interface IPostData {
    data: {
        "name": string, // Name of the task.
        "notes": string, // Free-form textual information associated with the task
        "projects": string[], // Array of project ids.
        "approval_status"?: "approved" | "changes_requested" | "pending" | "rejected" //Reflects the approval status of this task.
        "assignee"?: string | null, // Ids of a user.
        "completed"?: boolean, // True if the task is currently marked complete, false if not.
        "due_at"?: string | null, // The UTC date and time on which this task is due, or null if the task has no due time.
        "due_on"?: string, // The localized date on which this task is due, or null if the task has no due date.
        "followers"?: string[], // An array of strings identifying users.
        "html_notes"?: string, // The notes of the text with formatting as HTML
        "start_on"?: string | null, // The day on which work begins for the task , or null. Date format YYYY-MM-DD.
        "workspace"?: string // Id of a workspace.
    }
}

interface IValues {
    firstName: string;
    lastName: string;
    businessemail: string;
    message: string;
}


const ContactUs:React.FC = (): JSX.Element => {

    const onSubmit = (values:IValues) => {
        const {firstName,lastName,businessemail,message} = values
        const data:IPostData = {
            data: {
                name: `${businessemail}`,
                notes: `${firstName} ${lastName}: ${message}`,
                projects: ["1201830403108446"],
            }
        }

        return instance.post<IValues, AxiosResponse, IPostData>('/api/1.0/tasks', data)
            .then(res=>{
            const response = res.data;
        }).catch((error)=>{
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                //@ts-ignore
                console.log('error: ', error.response.data.errors);
                return error.message;
            }
        })
    }

    return (
        <section className="section contact-us container">
            <div className="contact-us__wrap">
                <div className="contact-us__image">
                    {/*<img src="../../assets/img/contactUs_human.png" alt=""/>*/}
                </div>
                <div className="contact-us__form">
                    <h1>Contact Us</h1>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit, form, submitting, pristine,values }) => (
                            <form onSubmit={event => {
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
                                <div style={{textAlign: "right"}}>
                                    <Button text={!submitting ? "Send" : "Disable"}
                                        // disabled={submitting || pristine}
                                    />
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;