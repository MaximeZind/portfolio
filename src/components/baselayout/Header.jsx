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
    )
}

export default Header;

Header.propTypes = {
    scrollValue: PropTypes.number.isRequired,
}