import { useState } from 'react';
import classes from '../styles/LanguagePicker.module.css';

import fr_flag from '../assets/fr_flag.png';
import us_flag from '../assets/us_flag.png';

function LanguagePicker() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.language_picker_container}>
            <div className={classes.language_picker_header} onClick={() => setIsOpen(!isOpen)}>
                <img src={fr_flag} className={classes.flag} />
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="7px"
                    viewBox="0 0 12 7"
                    stroke='red'
                    version="1.1"
                    className={isOpen ? `${classes.arrow_icon} ${classes.open}` : `${classes.arrow_icon}`}>
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
                <div className={classes.language_picker_options_list}>
                    <span className={classes.language_picker_options_list_option}>
                        <img src={fr_flag} className={classes.flag} />
                    </span>
                    <span className={classes.language_picker_options_list_option}>
                        <img src={us_flag} className={classes.flag} />
                    </span>
                </div>
            }
        </div>
    )
}

export default LanguagePicker;