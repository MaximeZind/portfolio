import classes from '../styles/ProjectsGallery.module.css';
import PropTypes from 'prop-types';
import hook from '../assets/hook.svg';
import { getProjects } from '../utils/getProjectsData';
import ProjectPreview from './ProjectPreview';
import { useEffect, useRef } from 'react';


function ProjectsGallery({ preferredLanguage, scrollableContainer, setIsProjectInfosOpen, setCurrentProjectId }) {


    const projects = getProjects();
    const galleryRef = useRef(null);

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
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={classes.projects_gallery} id='projects'>
            <img className={classes.hook} src={hook} alt="hook" />
            <h2>{preferredLanguage === 'en-US' ? 'Projects Gallery' : 'Gallerie des projets'}</h2>
            <div  className={classes.projects_gallery_divider}>
                <div className={classes.project_infos_background}></div>
                <div ref={galleryRef} className={classes.projects_gallery_previews}>
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
    setCurrentProjectId: PropTypes.func,
}