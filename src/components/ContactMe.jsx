import classes from '../styles/ContactMe.module.css';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import contactFormFields from '../data/contactMeFields.json';
import { useEffect, useRef, useState } from 'react';

function ContactMe({ preferredLanguage, scrollableContainer }) {

    const contactMeRef = useRef(null);
    const [titleScrollLeft, setTitleScrollLeft] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (contactMeRef.current) {
                const rect = contactMeRef.current.getBoundingClientRect();
                setTitleScrollLeft(rect.top - window.innerHeight);
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={classes.contact_me}
            ref={contactMeRef}
            id='contactme'>
            <h2 className={classes.contact_me_title}
                style={{
                    transform: `translateX(${titleScrollLeft / 5}px)`
                }}>
                {preferredLanguage === 'en-US' ? 'Contact me' : 'Me contacter'}
            </h2>
            <ContactForm firstName={contactFormFields.firstName[preferredLanguage]}
                lastName={contactFormFields.lastName[preferredLanguage]}
                email={contactFormFields.email[preferredLanguage]}
                phoneNumber={contactFormFields.phoneNumber[preferredLanguage]}
                message={contactFormFields.message[preferredLanguage]}
                send={contactFormFields.send[preferredLanguage]} />
        </section>
    )
}

export default ContactMe;

ContactMe.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
    scrollableContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
}