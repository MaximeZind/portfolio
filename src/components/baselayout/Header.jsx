import { useState, useEffect } from 'react';
import classes from '../../styles/Header.module.css';

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
            
        </header>
    )
}

export default Header;