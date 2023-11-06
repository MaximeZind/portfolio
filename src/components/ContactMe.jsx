import classes from '../styles/ContactMe.module.css';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import contactFormFields from '../data/contactMeFields.json';
import { useEffect, useRef, useState } from 'react';

function ContactMe({ preferredLanguage, scrollableContainer, setIsModalOpen }) {

    const contactMeRef = useRef(null);
    const titleRef = useRef(null)
    const [titleScrollLeft, setTitleScrollLeft] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (contactMeRef.current) {
                const rect = contactMeRef.current.getBoundingClientRect();
                const titleRect = titleRef.current.getBoundingClientRect();
                const startWidth = titleRect.width;
                // if (rect.top <= window.innerHeight) {
                //     const offset = (window.innerHeight - rect.top) / 4;
                //     // Slides the title to the left, but no further than 50px away from the edge
                //     if (window.innerWidth > (startWidth + offset)) {
                //         setTitleScrollLeft(-offset);
                //     } else if (window.innerWidth <= (startWidth + offset)) {
                //         setTitleScrollLeft(startWidth - window.innerWidth);
                //     }
                // }
                if (rect.top <= window.innerHeight) {
                    const margins = window.innerWidth/8;
                    // const margins = 10;
                    console.log(margins);
                    const titleRect = titleRef.current.getBoundingClientRect();
                    const startWidth = titleRect.width;
                    const offset = (window.innerHeight - titleRect.top);
                    const vector = window.innerWidth - (startWidth + 2*margins);
                    const ratio = vector / window.innerHeight;
                    const translateX = -(ratio * offset)
                    if (window.innerWidth > (startWidth + 2*margins + translateX)) {
                        setTitleScrollLeft(translateX);
                    } else if (window.innerWidth <= (startWidth + 2*margins + translateX)) {
                        setTitleScrollLeft(-vector);
                    }
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
                    transform: `translateX(${titleScrollLeft}px)`
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