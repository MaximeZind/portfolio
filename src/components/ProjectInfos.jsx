import { Link } from 'react-router-dom';
import classes from '../styles/ProjectInfos.module.css';
import PropTypes from 'prop-types';
import github_logo from '../assets/stackIcons/github_logo.png';
import figma_logo from '../assets/stackIcons/figma_logo.svg';

function ProjectInfos({ id, title, description, repo, preview, mockup, stack}) {

    // Why is that outside of the <main> you might ask ?
    // Well, because its 'fixed' position isn't working with the 'perspective: 10px;' in the main.
    // ...And I totally didn't waste 2 hours figuring that one out
    return (
        <div className={classes.project_infos_wrapper}>
            <div className={`${classes.project_infos}`}>
                <h3>{title}</h3>
                <div className={classes.project_infos_links}>
                    {
                        repo &&
                        <Link to={repo}>
                            <span className={`${classes.project_infos_icon} ${classes.repo}`}>
                                <img src={github_logo} alt="Github logo" />
                            </span>
                        </Link>
                    }
                    {
                        preview &&
                        <Link to={preview}>
                            <span className={`${classes.project_infos_icon} ${classes.preview}`}>
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
                        <Link to={mockup}>
                            <span className={`${classes.project_infos_icon} ${classes.mockup}`}>
                                <img src={figma_logo} alt="Figma logo" />
                            </span>
                        </Link>
                    }
                </div>
                <div className={classes.project_infos_description}>
                    <p>{description}</p>
                </div>
                <div className={classes.project_infos_stack}>
                    {stack.map((tech) => {
                        const lowerCaseTech = tech.toLowerCase();
                        return (
                            <span key={tech}
                                className={classes.project_infos_icon}>
                                <img src={lowerCaseTech === 'figma' ? `src/assets/stackIcons/${lowerCaseTech}_logo.svg` : `src/assets/stackIcons/${lowerCaseTech}_logo.png`}
                                    alt={tech}
                                    className={classes.project_infos_icon} />
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectInfos;

ProjectInfos.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repo: PropTypes.string,
    preview: PropTypes.string,
    mockup: PropTypes.string,
    stack: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
}