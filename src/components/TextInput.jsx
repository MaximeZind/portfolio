import React, { useEffect, useRef, useState } from 'react';
import classes from '../styles/TextInput.module.css';
import PropTypes from 'prop-types';

function TextInput({ name, label, errorMsg, onChange, defaultValue, preferredLanguage }) {

    const input = useRef(null);
    const container = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (container.current && defaultValue) {
            setIsFocused(true);
        }
    }, [container]);

    // Pour que le focus s'enlève lorsque l'utilisateur clique en dehors
    document.addEventListener('click', handleClickOutside);
    function handleClickOutside(event) {
        if (container.current && !container.current.contains(event.target)) {
            if (input.current.value === "") {
                setIsFocused(false)
            } else if (input.current.value !== "") {
                setIsFocused(true);
            }
        }
    }

    // modification de isFocused lors d'une modification de la value dans l'input
    function handleOnChange() {
        if (input.current.value !== "") {
            setIsFocused(true);
        } else if (input.current.value === "") {
            setIsFocused(false);

        }
    }

    return (
        <div ref={container} className={isFocused ? `${classes.text_input} ${classes.focused}` : `${classes.text_input}`} onClick={() => setIsFocused(true)}>
            <label className={classes.label}
                htmlFor={name}>{label}</label>
            <input defaultValue={defaultValue ? defaultValue : null}
                ref={input}
                className={classes.input}
                type="text"
                id={name}
                name={name}
                onChange={onChange ? onChange : handleOnChange} />
            {errorMsg ? <p className={classes.error_msg}>{errorMsg[preferredLanguage]}</p> : null}
        </div>
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMsg: PropTypes.shape({
        'en-US': PropTypes.string,
        'fr-FR': PropTypes.string,
    }),
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    preferredLanguage: PropTypes.string,
}

export default TextInput;