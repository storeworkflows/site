import React ,{FC} from "react";
import "./ContactUs.scss"
import contactHuman from "../../assets/img/contactUs_human.png"

import axios, {AxiosResponse} from "axios";

import ContactForm from "../../components/Form/ContactForm";
import {IPostData} from "../../types/interfaces/IPostData";
import {IFormValues} from "../../types/interfaces/IFormValues";


const token = '1/1201472437093173:891f86e59c48144f242d26887b76062f'
const instance = axios.create({
    baseURL: 'https://app.asana.com',
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});

const ContactUs:FC = (): JSX.Element => {

    const handleSubmit = (values:IFormValues) => {
        const {firstName,lastName,businessemail,message} = values

        const data:IPostData = {
            data: {
                name: `${businessemail}`,
                notes: `${firstName} ${lastName}: ${message}`,
                projects: ["1201970176498989"],
            }
        }

        return instance.post<IFormValues, AxiosResponse, IPostData>('/api/1.0/tasks', data)
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
        <section className="contact-us container">
            <div className="contact-us__wrap">
                <div className="contact-us__image">
                    <img src={contactHuman} alt=""/>
                </div>
                <div className="contact-us__form">
                    <h2>Contact Us</h2>
                    <ContactForm onSubmit={handleSubmit} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;