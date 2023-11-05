import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import classes from '../styles/ContactForm.module.css';
import TextInput from './TextInput';
import { validateEmail, validateForm, validateMessage, validateName } from '../utils/validateForm';

function ContactForm({ preferredLanguage, firstName, lastName, email, phoneNumber, message, send }) {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        const contactForm = event.target;
        const formData = new FormData(contactForm);
        const formJson = Object.fromEntries(formData.entries());
        const formValidation = validateForm(formJson);
        if (formValidation.isValid === true) {
            emailjs.sendForm('service_tct0pgs', 'template_xt98eiw', form.current, '2IgdocOQ9uvLehO0V')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
        handleErrorMsgs(formValidation.errorMsg);
    };

    // Handling of the error messages

    const [firstNameErrorMsg, setFirstNameErrorMsg] = useState({});
    const [lastNameErrorMsg, setLastNameErrorMsg] = useState({});
    const [emailErrorMsg, setEmailErrorMsg] = useState({});
    const [messageErrorMsg, setMessageErrorMsg] = useState({});

    function handleErrorMsgs(errorMsgs) {

        const setters = {
            firstName: setFirstNameErrorMsg,
            lastName: setLastNameErrorMsg,
            email: setEmailErrorMsg,
            message: setMessageErrorMsg,
        };

        Object.entries(errorMsgs).map(([field, errorMsg]) => {
            if (setters[field]) {
                setters[field](errorMsg);
            }
        });
    }

    // Handling the onChange events on the inputs, and give real time feedback to the user

    const [isMessageCorrect, setIsMessageCorrect] = useState(true);

    function handleInputOnChange(event) {
        const field = event.target.name;
        const inputValue = event.target.value;
        let fieldValidation = {};
        if (event.target.value === '') {
            return true;
        } else if (event.target.value !== '') {
            if (field === 'user_firstname' || field === 'user_lastname') {
                fieldValidation = validateName(inputValue);
            } else if (field === 'user_email') {
                fieldValidation = validateEmail(inputValue);
            } else if (field === 'message') {
                fieldValidation = validateMessage(inputValue);
            }
            return fieldValidation.response ? true : false;
        }
    }

    return (
        <form ref={form}
            onSubmit={sendEmail}
            className={classes.contact_form}>
            <div className={classes.contact_form_fields}>
                <div className={classes.contact_form_infos}>
                    <TextInput name="user_firstname"
                        label={firstName}
                        errorMsg={firstNameErrorMsg}
                        preferredLanguage={preferredLanguage}
                        onChange={handleInputOnChange} />
                    <TextInput name="user_lastname"
                        label={lastName}
                        errorMsg={lastNameErrorMsg}
                        preferredLanguage={preferredLanguage}
                        onChange={handleInputOnChange} />
                    <TextInput name="user_email"
                        label={email}
                        errorMsg={emailErrorMsg}
                        preferredLanguage={preferredLanguage}
                        onChange={handleInputOnChange} />
                    <TextInput name="user_phonenumber"
                        label={phoneNumber} />
                </div>
                <div className={classes.contact_form_message}>
                    <label>{message}</label>
                    <textarea name="message" 
                    onChange={(event) => setIsMessageCorrect(handleInputOnChange(event))}
                    style={{
                        border: !isMessageCorrect && '1px solid red'
                    }}/>
                    {messageErrorMsg[preferredLanguage] ? <p className={classes.error_msg}>{messageErrorMsg[preferredLanguage]}</p> : null}
                </div>
            </div>
            <input type="submit"
                value={send}
                className={classes.contact_form_submit_button} />
        </form>
    );
};

export default ContactForm;

ContactForm.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    send: PropTypes.string.isRequired,
}