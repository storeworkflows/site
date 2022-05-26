import React, {FC} from "react";
import "./ContactUs.scss"
import contactHuman from "../../assets/img/contactUs_human.png"
import axios, {AxiosResponse} from "axios";

import ContactForm from "../../components/Form/ContactForm";
import {IPostData} from "../../types/interfaces/IPostData";
import {IFormValues} from "../../types/interfaces/IFormValues";


const token = process.env.REACT_APP_ASANA_TOKEN || ''
const baseUrl = process.env.REACT_APP_ASANA_URI || ''
const projectId = process.env.REACT_APP_ASANA_PROJECT || ''
const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});

const ContactUs: FC = (): JSX.Element => {

    const handleSubmit = (values: IFormValues) => {
        const {firstName, lastName, businessemail, message} = values

        const data: IPostData = {
            data: {
                name: `${businessemail}`,
                notes: `${firstName} ${lastName}: ${message}`,
                projects: [projectId],
            }
        }

        return instance.post<IFormValues, AxiosResponse, IPostData>('/api/1.0/tasks', data)
            .then(res => {
                const response = res.data;
            }).catch((error) => {
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    //@ts-ignore
                    console.log('error: ', error.response.data.errors);
                    return error.message;
                }
            })
    }

    return (
        <section className="contact-us container">
            <img
                className="contact-us__image"
                src={contactHuman}
                alt="contact-us"
            />
            <h2 className={"contact-us__header"}>Contact Us</h2>

            <div className="contact-us__form">
                <ContactForm onSubmit={handleSubmit}/>
            </div>
        </section>
    );
};

export default ContactUs;