import classes from '../styles/ProjectsGallery.module.css';
import PropTypes from 'prop-types';
import hook from '../assets/hook.svg';
import { getProjects } from '../utils/getProjectsData';
import ProjectPreview from './ProjectPreview';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectsGallery({ preferredLanguage, scrollableContainer, setIsProjectInfosOpen, setCurrentProjectId }) {


    const projects = getProjects();
    const galleryRef = useRef(null);
    const titleRef = useRef(null);
    const [titleScrollLeft, setTitleScrollLeft] = useState(0);
    const [titleLeft, setTitleLeft] = useState(0);

    //
    useEffect(() => {
        function handleScroll() {
            if (galleryRef.current) {
                const rect = galleryRef.current.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > window.innerHeight) {
                    setIsProjectInfosOpen(true);
                } else if (rect.top > 0 || rect.bottom <= window.innerHeight) {
                    setIsProjectInfosOpen(false);
                }
                // Slides the title to the left, but no further than 10px away from the edge
                if (rect.top <= window.innerHeight) {
                    const titleRect = titleRef.current.getBoundingClientRect();
                    setTitleLeft((window.innerWidth - titleRect.width) / 2);
                    const offset = (window.innerHeight - titleRect.top);
                    setTitleScrollLeft(-offset/12)
                }
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={galleryRef} className={classes.projects_gallery} id='projects'>
            <img className={classes.hook} src={hook} alt="hook" />
            <h2 className={classes.projects_gallery_title}
                ref={titleRef}
                style={{
                    transform: `translateX(${titleScrollLeft}px)`,
                    left: `${titleLeft}px`
                }}>{preferredLanguage === 'en-US' ? 'Projects Gallery' : 'Galerie des projets'}</h2>
            <div className={classes.projects_gallery_divider}>
                <div className={classes.project_infos_background}></div>
                <div className={classes.projects_gallery_previews}>
                    {
                        projects.map((project) => {
                            return (
                                <ProjectPreview key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    repo={project.repo}
                                    preview={project.preview}
                                    mockup={project.mockup}
                                    setCurrentProjectId={setCurrentProjectId}
                                    scrollableContainer={scrollableContainer} 
                                    preferredLanguage={preferredLanguage}/>
                                    
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.projects_gallery_classic}>
                {
                    projects.map((project) => {
                        return (
                            <ProjectCard key={project.id}
                                title={project.title}
                                thumbnail={project.thumbnail}
                                tasks={project.tasks[preferredLanguage]}
                                repo={project.repo}
                                preview={project.preview}
                                mockup={project.mockup}
                                stack={project.stack}
                                dateOfCreation={project.dateOfCreation}
                                preferredLanguage={preferredLanguage} />
                        )
                    })
                }
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
    setCurrentProjectId: PropTypes.func,
}