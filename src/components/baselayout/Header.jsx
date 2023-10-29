import { useState, useEffect } from 'react';
import classes from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

function Header() {

    // State to determine the position on the page
    const [scrollY, setScrollY] = useState(0);

    // useEffect to call handleOnScroll and update the classes of the header
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, []);

    function handleOnScroll(){
        setScrollY(window.scrollY);
    }

    return (
        <header className={scrollY < 50 ?`${classes.header}`:`${classes.header} ${classes.scrolled}`}>
            <div></div>
            <nav className={classes.nav}>
                <Link to="#projects">Projects</Link>
                <Link to="#contactme">Contact Me</Link>
                <ThemeToggle/>
            </nav>
        </header>
    )
}

export default Header;