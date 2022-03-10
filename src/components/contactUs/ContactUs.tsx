import React from "react";
import "./contactUs.scss";

import { Form, Field } from 'react-final-form'
import axios from "axios";

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

interface IValues {
    firstName: string;
    lastName: string;
    businessemail: string;
    message: string;
}
const ContactUs:React.FC = (): JSX.Element => {

    const onSubmit = (values:IValues) => {
        const {firstName,lastName,businessemail,message} = values

        instance.post('/api/1.0/tasks', {
            "data": {
                "approval_status": "pending",
                "assignee": "1201472437093173",
                "completed": false,
                //"due_at": '',
                "due_on": new Date().toISOString().slice(0, 10),
                "followers": [
                    "1201472437093173"
                ],
                //"html_notes": "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
                "name": `${firstName} ${lastName} Email: ${businessemail}`,
                "notes": `${message} `,
                "projects": [
                    "1201830403108446"
                ],
                "resource_subtype": "default_task",
                "start_on": null,

                "workspace": "1129246741893412"
            }
        }).then(res=>{
            const personse = res.data;
            console.log(personse)
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
                        render={({ handleSubmit, form, submitting, pristine }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <Field<string>
                                        name="firstName"
                                        validate={required}
                                        placeholder="First Name"
                                        component={Input}
                                        hover={'aasd'}
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
                                    <Button text={"Send"}
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