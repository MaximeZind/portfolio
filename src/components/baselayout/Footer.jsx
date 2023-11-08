import { Link } from 'react-router-dom';
import classes from '../../styles/Footer.module.css';
import navLinks from '../../data/navLinks.json';
import { useSelector } from 'react-redux';
import socials from '../../data/socials.json';

function Footer({ }) {

    const preferredLanguage = useSelector((state) => state.languageReducer);
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_main_content}>
                <div className={classes.footer_logo_wrapper}>
                    <Link to={'/'} title='Home'>
                        <svg className={classes.footer_logo} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" alt="Logo">
                            <polygon points="0,500 70,500 70,125 190,260 230,210 50,0 0,0" />
                            <polygon points="105,0 160,65 340,65 395,0" />
                            <polygon points="500,0 450,0 105,440 105,500 500,500 500,420 210,420 430,130 430,380 500,380" />
                        </svg>
                    </Link>
                </div>
                <div className={classes.footer_right}>
                    <nav className={classes.footer_right_nav}>
                        {navLinks.map((link) => {
                            return (
                                <Link key={link.url}
                                    className={classes.link}
                                    to={link.url}>
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

export default Footer;
