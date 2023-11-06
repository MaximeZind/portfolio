import classes from '../styles/ProjectCard.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import github_logo from '../assets/stackIcons/github_logo.png';
import figma_logo from '../assets/stackIcons/figma_logo.svg';
import { useState } from 'react';

function ProjectCard({ title, thumbnail, description, repo, preview, mockup, stack, dateOfCreation, preferredLanguage }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className={isOpen ? `${classes.project_card} ${classes.open}` : `${classes.project_card}`}>
            <img src={thumbnail} alt={title} className={classes.project_card_image} />
            <div className={classes.project_card_content}>
                <header className={classes.project_card_content_header}>
                    <h3 className={classes.project_card_content_header_title}>{title}</h3>
                    <span className={classes.project_card_content_header_toggle}
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? preferredLanguage === 'en-US' ? 'Less' : 'Fermer' : preferredLanguage === 'en-US' ? 'More' : 'Ouvrir'}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            enableBackground="new 0 0 32 32"
                            version="1.1"
                            viewBox="0 0 32 32"
                            xmlSpace="preserve"
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : null,
                            }}>
                            <path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z"
                                id="Expand_More" />
                        </svg>
                    </span>
                </header>
                <div className={classes.project_card_content_text}>
                    <div className={classes.project_card_content_text_top}>
                        <p className={classes.project_card_content_text_top_date}>{dateOfCreation}</p>
                        <div className={classes.project_card_content_text_links}>
                            {
                                repo &&
                                <Link to={repo} target="_blank">
                                    <span className={`${classes.links_icon} ${classes.repo}`}>
                                        <img src={github_logo} alt="Github logo" />
                                    </span>
                                </Link>
                            }
                            {
                                preview &&
                                <Link to={preview} target="_blank">
                                    <span className={`${classes.links_icon} ${classes.preview}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            width="92px"
                                            height="92px"
                                            viewBox="0 0 92 92"
                                            enableBackground="new 0 0 92 92"
                                            space="preserve">
                                            <path id="XMLID_1239_" d="M91.3,43.8C90.6,42.8,74.4,19,46,19C17.6,19,1.4,42.8,0.7,43.8c-0.9,1.3-0.9,3.1,0,4.5  C1.4,49.2,17.6,73,46,73c28.4,0,44.6-23.8,45.3-24.8C92.2,46.9,92.2,45.1,91.3,43.8z M46,65C26.7,65,13.5,51.4,9,46  c4.5-5.5,17.6-19,37-19c19.3,0,32.5,13.6,37,19C78.4,51.5,65.3,65,46,65z M48.3,29.6c-4.4-0.6-8.7,0.5-12.3,3.2c0,0,0,0,0,0  c-7.3,5.5-8.8,15.9-3.3,23.2c2.7,3.6,6.5,5.8,10.9,6.5c0.8,0.1,1.6,0.2,2.3,0.2c3.6,0,7-1.2,9.9-3.3c7.3-5.5,8.8-15.9,3.3-23.2  C56.6,32.5,52.7,30.2,48.3,29.6z M52.3,54.5c-2.2,1.7-5,2.4-7.8,2c-2.8-0.4-5.3-1.9-7-4.1C34.1,47.7,35,41,39.7,37.5  c2.2-1.7,5-2.4,7.8-2c2.8,0.4,5.3,1.9,7,4.1C57.9,44.3,57,51,52.3,54.5z M51.9,40c0.8,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8  c-0.7,0.7-1.8,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.7-0.8,1.8-1.2,2.8-1.2  C50.2,38.9,51.2,39.3,51.9,40z" />
                                        </svg>
                                    </span>
                                </Link>
                            }
                            {
                                mockup &&
                                <Link to={mockup} target="_blank">
                                    <span className={`${classes.links_icon} ${classes.mockup}`}>
                                        <img src={figma_logo} alt="Figma logo" />
                                    </span>
                                </Link>
                            }
                        </div>
                    </div>
                    <p className={classes.project_card_content_text_description}>
                        {description}
                    </p>
                    <footer className={classes.project_card_content_footer}>
                        {stack.map((tech) => {
                            const lowerCaseTech = tech.toLowerCase();
                            return (
                                <span key={tech}
                                    className={classes.project_techs_icon_span}>
                                    <img src={lowerCaseTech === 'figma' ? `src/assets/stackIcons/${lowerCaseTech}_logo.svg` : `src/assets/stackIcons/${lowerCaseTech}_logo.png`}
                                        alt={tech}
                                        className={classes.project_techs_icon} />
                                </span>
                            )
                        })}
                    </footer>
                </div>
            </div>
        </article>
    )
}


export default ProjectCard;

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repo: PropTypes.string,
    preview: PropTypes.string,
    mockup: PropTypes.string,
    stack: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    dateOfCreation: PropTypes.string.isRequired,
    preferredLanguage: PropTypes.string.isRequired,
}