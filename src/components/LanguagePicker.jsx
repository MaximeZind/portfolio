import { useEffect, useRef, useState } from 'react';
import classes from '../styles/LanguagePicker.module.css';

import fr_flag from '../assets/fr-fr_flag.png';
import us_flag from '../assets/en-us_flag.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateLanguage } from '../actions/language.action';

function LanguagePicker() {

    const dispatch = useDispatch();
    const preferredLanguage = useSelector((state) => state.languageReducer);
    const languageFlags = {
        "fr-FR": fr_flag,
        'en-US': us_flag,
    };
    const [isOpen, setIsOpen] = useState(false);
    const [optionsListStatus, setOptionsListStatus] = useState('closed');
    const [isMouseIn, setIsMouseIn] = useState(false);

    const timeoutRef = useRef(null);

    // Functions to close the language picker after .5s if the cursor is still outside of the component.
    function handleMouseEnter() {
        setIsMouseIn(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    function handleMouseLeave() {
        timeoutRef.current = setTimeout(() => {
            setIsMouseIn(false);
        }, 500);
    };

    function handleClose() {
        setOptionsListStatus('closing');
        setTimeout(() => {
            setOptionsListStatus('closed');
            setIsOpen(false);
        }, 250)
    };

    function handleOpen() {
        setIsOpen(true);
        setOptionsListStatus('opening');
        setTimeout(() => {
            setOptionsListStatus('open');
        }, 250)
    };

    useEffect(() => {
        if (isMouseIn === false) {
            handleClose();
        }
    }, [isMouseIn]);

    function handleOnClick(key) {
        dispatch(updateLanguage(key));
        handleClose();
    };

    return (
        <div className={classes.language_picker_container} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className={classes.language_picker_header} onClick={isOpen ? handleClose : handleOpen}>
                <img src={languageFlags[preferredLanguage]} className={classes.flag} />
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="7px"
                    viewBox="0 0 12 7"
                    stroke='red'
                    version="1.1"
                    className={isOpen ? `${classes.arrow_icon} ${classes.open}` : `${classes.arrow_icon}`}
                    style={{
                        transform: isOpen && isMouseIn && 'rotate(180deg)',
                        transition: 'transform .3s ease'
                    }}>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                        <g id="Rounded" transform="translate(-616.000000, -2467.000000)">
                            <g id="Hardware" transform="translate(100.000000, 2404.000000)">
                                <g id="-Round-/-Hardware-/-keyboard_arrow_down" transform="translate(510.000000, 54.000000)">
                                    <g>
                                        <rect id="Rectangle-Copy-103" x="0" y="0" width="24" height="24" />
                                        <path d="M8.12,9.29 L12,13.17 L15.88,9.29 C16.27,8.9 16.9,8.9 17.29,9.29 C17.68,9.68 17.68,10.31 17.29,10.7 L12.7,15.29 C12.31,15.68 11.68,15.68 11.29,15.29 L6.7,10.7 C6.31,10.31 6.31,9.68 6.7,9.29 C7.09,8.91 7.73,8.9 8.12,9.29 Z" id="🔹-Icon-Color" className={classes.icon_color} />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            {isOpen &&
                <div className={`${classes.language_picker_options_list} ${classes[optionsListStatus]}`}>
                    {Object.keys(languageFlags).map((key) => {
                        return (
                            key !== preferredLanguage ?
                                <span key={key} className={classes.language_picker_options_list_option} onClick={() => handleOnClick(key)}>
                                    <img  src={languageFlags[key]} className={classes.flag} />
                                </span> : null
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default LanguagePicker;