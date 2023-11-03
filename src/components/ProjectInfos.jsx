import classes from '../styles/ProjectInfos.module.css';
import PropTypes from 'prop-types';

function ProjectInfos({ id, title, description, stack}) {

    // Why is that outside of the <main> you might ask ?
    // Well, because its 'fixed' position isn't working with the 'perspective: 10px;' in the main.
    // ...And I totally didn't waste 2 hours figuring that one out
    return (
        <div className={classes.project_infos_wrapper}>
            <div className={`${classes.project_infos} ${id === 0 && classes.closing} ${id !== 0 && classes.opening}`}>
                <h3>{title}</h3>
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
    stack: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
}