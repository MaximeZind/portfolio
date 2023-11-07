import classes from '../styles/ContactMe.module.css';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import contactFormFields from '../data/contactMeFields.json';
import { useEffect, useRef, useState } from 'react';

function ContactMe({ preferredLanguage, scrollableContainer, setIsModalOpen }) {

    const contactMeRef = useRef(null);
    const titleRef = useRef(null)
    const [titleScrollLeft, setTitleScrollLeft] = useState(0);
    const [titleLeft, setTitleLeft] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (contactMeRef.current) {
                const rect = contactMeRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight  && window.innerWidth > 426) {
                    const titleRect = titleRef.current.getBoundingClientRect();
                    setTitleLeft((window.innerWidth - titleRect.width) / 2);
                    const offset = (window.innerHeight - titleRect.top);
                    setTitleScrollLeft(-offset / 15)
                }
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
                ref={titleRef}
                style={{
                    transform: `translateX(${titleScrollLeft}px)`,
                    left: `${titleLeft}px`
                }}>
                {preferredLanguage === 'en-US' ? 'Contact me' : 'Me contacter'}
            </h2>
            <ContactForm preferredLanguage={preferredLanguage}
                firstName={contactFormFields.firstName[preferredLanguage]}
                lastName={contactFormFields.lastName[preferredLanguage]}
                email={contactFormFields.email[preferredLanguage]}
                phoneNumber={contactFormFields.phoneNumber[preferredLanguage]}
                message={contactFormFields.message[preferredLanguage]}
                send={contactFormFields.send[preferredLanguage]}
                setIsModalOpen={setIsModalOpen} />
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
    setIsModalOpen: PropTypes.func.isRequired,
}