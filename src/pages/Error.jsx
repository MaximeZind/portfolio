import React from 'react';
import classes from '../styles/Error.module.css';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Error() {

    const preferredLanguage = useSelector((state) => state.languageReducer);
    let location = useLocation()
    const pageTitle = preferredLanguage === 'en-US' ? 'Error 404' : 'Erreur 404';
    document.title = `Maxime Zinderstein - ${pageTitle}`;
    const errorText = preferredLanguage === 'en-US' ? "Whoopsie, this page does not exist! Don't worry, I got you:" : "Oups, cette page n'existe page! Ne vous en faites pas, rien de grave:";

    return (
        (location.pathname === '/404') ?
            <main className={classes.main}>
                <h1 className={classes.error_name}>
                    404
                </h1>
                <p className={classes.error_text}>
                    {errorText}
                </p>
                <Link to={'/'}>
                    <button className={classes.button}>
                        {preferredLanguage === 'en-US' ? 'Homepage' : 'Accueil'}
                    </button>
                </Link>
            </main> : <Navigate to={'/404'} />
    );
}

export default Error;