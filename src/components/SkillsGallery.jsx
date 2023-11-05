import classes from '../styles/SkillsGallery.module.css';
import PropTypes from 'prop-types';
import skills from '../data/skillsData.json';
import SkillsCard from './SkillCard';
import { useState } from 'react';

function SkillsGallery({ preferredLanguage }) {

    const [isOpen, setIsOpen] = useState(false);

    const transformations = [
        {
            x: -180,
            y: -40
        },
        {
            x: -20,
            y: -160
        },
        {
            x: 120,
            y: -140
        },
        {
            x: 160,
            y: 40
        },
        {
            x: 20,
            y: 180
        },
        {
            x: -140,
            y: 150
        },
        {
            x: -140,
            y: -200
        },
        {
            x: 260,
            y: -200
        },
        {
            x: 300,
            y: 0
        },
        {
            x: -280,
            y: -220
        }
    ];


    return (
        <section className={classes.skills_gallery}>
            <div className={classes.skills_gallery_cards}>
            <div className={`${classes.card} ${isOpen && classes.card1}`}></div>
                {
                    skills.map((skill, index) => {
                        return (
                            <SkillsCard key={index}
                                name={skill.name}
                                img={skill.img}
                                coordinates={isOpen ? transformations[index] : null}
                                animationDelay={index * 0.325448} />
                        )
                    })
                }
                <div className={`${classes.card} ${isOpen && classes.card2}`}></div>
                <div className={`${classes.card} ${isOpen && classes.card3}`}></div>
                <div className={classes.folder} onClick={() => setIsOpen(!isOpen)}>
                    <p>SKILLSET - Do not open</p>
                </div>
            </div>
        </section>
    )
}

export default SkillsGallery;

SkillsGallery.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
}