import { useState, useEffect } from 'react';
import classes from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import LanguagePicker from '../LanguagePicker';

function Header() {

    // State to determine the position on the page
    const [isScrolled, setIsScrolled] = useState(false);
    const [linksClass, setLinksClass] = useState('visible');

    // useEffect to call handleOnScroll and update the classes of the header
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, []);

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
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else if (window.scrollY < 50) {
            setIsScrolled(false);
        }
    }

    return (
        <header className={isScrolled ? `${classes.header} ${classes.scrolled}` : `${classes.header}`}>
            <div></div>
            <nav className={classes.nav}>
                <Link className={`${classes.link} ${linksClass}`} to="#projects">Projects</Link>
                <Link className={`${classes.link} ${linksClass}`} to="#contactme">Contact Me</Link>
                <LanguagePicker/>
                <ThemeToggle/>
            </nav>
        </header>
    )
}

export default Header;