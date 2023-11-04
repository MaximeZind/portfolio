import classes from '../styles/SkillsGallery.module.css';
import PropTypes from 'prop-types';
import skills from '../data/skillsData.json';
import SkillsCard from './SkillCard';

function ContactMe({ preferredLanguage }) {

    return (
        <section className={classes.skills_gallery} id='contactme'>
            <h2>Contact me</h2>
        </section>
    )
}

export default ContactMe;

ContactMe.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
}