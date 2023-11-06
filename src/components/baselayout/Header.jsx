import { useState, useEffect } from 'react';
import classes from '../../styles/Header.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navLinks from '../../data/navLinks.json';
import ThemeToggle from '../ThemeToggle';
import LanguagePicker from '../LanguagePicker';
import { useSelector } from 'react-redux';

function Header({ scrollValue }) {

    const preferredLanguage = useSelector((state) => state.languageReducer);
    // State to determine the position on the page
    const [isScrolled, setIsScrolled] = useState(false);
    const [linksClass, setLinksClass] = useState('visible');

    // useEffect to call handleOnScroll and update the classes of the header
    useEffect(() => {
        handleOnScroll();
    }, [scrollValue]);

    useEffect(() => {
        if (isScrolled) {
            setLinksClass(classes.hiding);
            setTimeout(() => {
                setLinksClass(classes.hidden);
            }, 300);
        } else if (!isScrolled) {
            setLinksClass(classes.activating);
            setTimeout(() => {
                setLinksClass(classes.activated);
            }, 300);
        }
    }, [isScrolled]);

    function handleOnScroll() {
        if (scrollValue > 50) {
            setIsScrolled(true);
        } else if (scrollValue < 50) {
            setIsScrolled(false);
        }
    }

    // Handling the menu for mobiles / tablets

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={isScrolled ? `${classes.header} ${classes.scrolled}` : `${classes.header}`}>
                <div className={classes.logo}></div>
                <nav className={isOpen ? `${classes.nav} ${classes.open}` : `${classes.nav}`}>
                    {navLinks.map((link) => {
                        return (
                            <Link key={link.url}
                                className={`${classes.link} ${linksClass}`}
                                to={link.url}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text[preferredLanguage]}
                            </Link>
                        )
                    })}
                    <LanguagePicker />
                    <ThemeToggle />
                </nav>
                <div className={isOpen ? `${classes.burger_menu} ${classes.open}` : `${classes.burger_menu}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${classes.burger_menu_bar} ${classes.top_bar}`}></span>
                    <span className={`${classes.burger_menu_bar} ${classes.middle_bar}`}></span>
                    <span className={`${classes.burger_menu_bar} ${classes.bottom_bar}`}></span>
                </div>
            </header>
            {scrollValue >= window.innerHeight &&

                <span className={classes.to_top}>
                    <Link to='#top' className={classes.to_top_link}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16px" height="18px" viewBox="0 0 16 18" version="1.1">
                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Rounded" transform="translate(-172.000000, -2061.000000)">
                                    <g id="Editor" transform="translate(100.000000, 1960.000000)">
                                        <g id="-Round-/-Editor-/-vertical_align_top" transform="translate(68.000000, 98.000000)">
                                            <g>
                                                {/* <polygon id="Path" points="0 0 24 0 24 24 0 24" /> */}
                                                <path d="M9.21,11 L11,11 L11,20 C11,20.55 11.45,21 12,21 C12.55,21 13,20.55 13,20 L13,11 L14.79,11 C15.24,11 15.46,10.46 15.14,10.15 L12.35,7.36 C12.15,7.16 11.84,7.16 11.64,7.36 L8.85,10.15 C8.54,10.46 8.76,11 9.21,11 Z M4,4 C4,4.55 4.45,5 5,5 L19,5 C19.55,5 20,4.55 20,4 C20,3.45 19.55,3 19,3 L5,3 C4.45,3 4,3.45 4,4 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </span>
            }
        </>
    )
}

export default Header;

Header.propTypes = {
    scrollValue: PropTypes.number.isRequired,
}