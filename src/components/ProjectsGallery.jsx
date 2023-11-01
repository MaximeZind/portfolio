import classes from '../styles/ProjectsGallery.module.css';
import PropTypes from 'prop-types';
import hook from '../assets/hook.svg';

function ProjectsGallery({ preferredLanguage }) {

    return (
        <section className={classes.projects_gallery}>
            <img className={classes.hook} src={hook} alt="hook"/>
            <h2>Projects Gallery</h2>
        </section>
    )
}

export default ProjectsGallery;

ProjectsGallery.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
}