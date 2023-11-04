import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import classes from '../styles/ContactForm.module.css';
import TextInput from './TextInput';

function ContactForm({ firstName, lastName, email, phoneNumber, message, send }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tct0pgs', 'template_xt98eiw', form.current, '2IgdocOQ9uvLehO0V')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form}
            onSubmit={sendEmail}
            className={classes.contact_form}>
            <div className={classes.contact_form_fields}>
                <div className={classes.contact_form_infos}>
                    <TextInput name="user_firstname"
                        label={firstName} />
                    <TextInput name="user_lastname"
                        label={lastName} />
                    <TextInput name="user_email"
                        label={email} />
                    <TextInput name="user_phonenumber"
                        label={phoneNumber} />
                </div>
                <div className={classes.contact_form_message}>
                    <label>{message}</label>
                    <textarea name="message" />
                </div>
            </div>
            <input type="submit"
                value={send}
                className={classes.contact_form_submit_button}/>
        </form>
    );
};

export default ContactForm;

ContactForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    send: PropTypes.string.isRequired,
}