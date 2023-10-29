import { useEffect, useState } from 'react';
import classes from '../styles/ThemeToggle.module.css';

function ThemeToggle() {

    const [isClicked, setIsClicked] = useState(false);
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;

    useEffect(() => {
        if (!body.dataset.theme) {
            if (prefersDarkMode) {
                body.dataset.theme = 'dark';
                setIsClicked(false);
            } else if (!prefersDarkMode) {
                body.dataset.theme = 'light';
                setIsClicked(true);
                console.log((isClicked));
            }
        }
    });

    function handleThemeToggle() {
        body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
        setIsClicked(!isClicked);
    }

    return (
        <div className={isClicked ? `${classes.switch} ${classes.clicked}` : `${classes.switch}`} onClick={handleThemeToggle}>
            <div className={`${classes.background} ${classes.background_left}`}>
                <svg version="1.1"
                    id="Icons"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className={`${classes.icon} ${classes.moon}`}>
                    <g>
                        <path d="M17,4c-0.2,0-0.5,0-0.7,0l-0.1,0c-0.4,0-0.8,0.4-0.9,0.8s0.1,0.9,0.5,1.1C18.4,7.3,20,10,20,13c0,4.4-3.6,8-8,8   c-2.3,0-4.6-1-6.1-2.8c-0.3-0.3-0.8-0.4-1.2-0.3c-0.4,0.2-0.6,0.6-0.6,1.1c1,6.4,6.4,11,12.8,11c7.2,0,13-5.8,13-13S24.2,4,17,4z" />
                        <path d="M6,13.2C6.1,13.7,6.5,14,7,14s0.9-0.3,1-0.8c0.5-2.2,1-2.7,3.3-3.3C11.7,9.9,12,9.5,12,9s-0.3-0.9-0.8-1C9,7.5,8.5,7,8,4.8   C7.9,4.3,7.5,4,7,4S6.1,4.3,6,4.8C5.5,7,5,7.5,2.8,8C2.3,8.1,2,8.5,2,9s0.3,0.9,0.8,1C5,10.5,5.5,11,6,13.2z" />
                        <path d="M11,14c-0.6,0-1,0.4-1,1s0.4,1,1,1c0,0.6,0.4,1,1,1s1-0.4,1-1c0.6,0,1-0.4,1-1s-0.4-1-1-1c0-0.6-0.4-1-1-1S11,13.4,11,14z" />
                    </g>
                </svg>
            </div>
            <div className={`${classes.background} ${classes.background_right}`}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${classes.icon} ${classes.sun}`}>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            </div>
            <span className={classes.handle}></span>
        </div>
    )
}

export default ThemeToggle;