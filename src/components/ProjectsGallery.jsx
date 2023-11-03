import classes from '../styles/ProjectsGallery.module.css';
import PropTypes from 'prop-types';
import hook from '../assets/hook.svg';
import { getLastProjectId, getProject, getProjects } from '../utils/getProjectsData';
import ProjectPreview from './ProjectPreview';
import { useEffect, useRef, useState } from 'react';
import ProjectInfos from './ProjectInfos';


function ProjectsGallery({ preferredLanguage, scrollableContainer, setIsProjectInfosOpen, setCurrentProjectId }) {


    const projects = getProjects();
    const lastProjectId = getLastProjectId();
    const galleryRef = useRef(null);


    //
    useEffect(() => {
        function handleScroll() {
            if (galleryRef.current) {
                const rect = galleryRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setIsProjectInfosOpen(true)
                }
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={classes.projects_gallery}>
            <img className={classes.hook} src={hook} alt="hook" />
            <h2>Projects Gallery</h2>
            <div  className={classes.projects_gallery_divider}>
                <div ref={galleryRef} className={classes.projects_gallery_previews}>
                    {
                        projects.map((project) => {
                            return (
                                <ProjectPreview key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    setCurrentProjectId={setCurrentProjectId}
                                    scrollableContainer={scrollableContainer} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsGallery;

ProjectsGallery.propTypes = {
    preferredLanguage: PropTypes.string.isRequired,
    scrollableContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    scrollableContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    setIsProjectInfosOpen: PropTypes.func.isRequired,
}