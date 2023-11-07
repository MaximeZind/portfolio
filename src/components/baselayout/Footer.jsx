import { Link } from 'react-router-dom';
import classes from '../../styles/Footer.module.css';
import PropTypes from 'prop-types';
import navLinks from '../../data/navLinks.json';
import { useSelector } from 'react-redux';
import socials from '../../data/socials.json';

function Header({ }) {

    const preferredLanguage = useSelector((state) => state.languageReducer);
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_main_content}>
                <div className={classes.footer_logo}></div>
                <div className={classes.footer_right}>
                    <nav className={classes.footer_right_nav}>
                        {navLinks.map((link) => {
                            return (
                                <Link key={link.url}
                                    className={classes.link}
                                    to={link.url}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text[preferredLanguage]}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className={classes.footer_right_socials}>
                        {
                            socials.map((social) => {
                                return (
                                    <Link to={social.link}
                                        key={social.name}
                                        className={`${classes.socials_icon} ${classes[social.name]}`}
                                    >
                                        <img src={social.icon} alt={social.name} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <p className={classes.footer_signature}>
                {preferredLanguage == 'en-US' ? '2023 - © Made with ❤️ by Maxime Zinderstein' : '2023 - © Créé avec ❤️ par Maxime Zinderstein'}
            </p>
        </footer>
    )
}

export default Header;

Header.propTypes = {

}