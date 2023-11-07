import classes from '../styles/ProjectsGallery.module.css';
import PropTypes from 'prop-types';
import hook from '../assets/hook.svg';
import { getProjects } from '../utils/getProjectsData';
import ProjectPreview from './ProjectPreview';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { sortFromMostRecentToOldest } from '../utils/sort';

function ProjectsGallery({ preferredLanguage, scrollableContainer, setIsProjectInfosOpen, setCurrentProjectId }) {

    // Import of the projects array
    const projects = getProjects();

    // Ref of the gallery (to monitor scrolling)
    const galleryRef = useRef(null);
    // Ref of the title (to slide it according to scrolling)
    const titleRef = useRef(null);
    // State to update the translateX of the title
    const [titleScrollLeft, setTitleScrollLeft] = useState(0);
    // Initial position of the title (middle)
    const [titleLeft, setTitleLeft] = useState(0);

    // Initial amount of projects in the gallery, and the increment for each click on "More"
    const increment = 4;
    const [amountOfProjects, setAmountOfProjects] = useState(increment);

    // We sort the projects by most recent
    const projectsSortedFromMostRecent = sortFromMostRecentToOldest(projects);

    // useEffect used to 
    // - update the data in ProjectInfos
    // - Move the section title
    useEffect(() => {
        function handleScroll() {
            if (galleryRef.current) {
                const rect = galleryRef.current.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > window.innerHeight) {
                    setIsProjectInfosOpen(true);
                } else if (rect.top > 0 || rect.bottom <= window.innerHeight) {
                    setIsProjectInfosOpen(false);
                }
                // Slides the title to the left
                if (rect.top <= window.innerHeight && window.innerWidth > 426) {
                    const titleRect = titleRef.current.getBoundingClientRect();
                    setTitleLeft((window.innerWidth - titleRect.width) / 2);
                    const offset = (window.innerHeight - titleRect.top);
                    setTitleScrollLeft(-offset / 12)
                }
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleOnClickLoadMore() {
        if (amountOfProjects + increment <= projectsSortedFromMostRecent.length) {
            setAmountOfProjects(amountOfProjects + increment);
        } else if (amountOfProjects + increment > projectsSortedFromMostRecent.length) {
            setAmountOfProjects(projectsSortedFromMostRecent.length);
        }
    }

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
                        projectsSortedFromMostRecent.map((project, index) => {

                            return (index < amountOfProjects ?
                                <ProjectPreview key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    repo={project.repo}
                                    preview={project.preview}
                                    mockup={project.mockup}
                                    setCurrentProjectId={setCurrentProjectId}
                                    scrollableContainer={scrollableContainer}
                                    preferredLanguage={preferredLanguage} /> : null

                            )
                        })
                    }
                    {
                        projectsSortedFromMostRecent.length > amountOfProjects ?
                            <button className={classes.load_more_button} onClick={handleOnClickLoadMore}>
                                {preferredLanguage === 'en-US' ? 'Load more' : 'Charger plus'}
                            </button> : null
                    }
                </div>
            </div>
            <div className={classes.projects_gallery_classic}>
                {
                    projectsSortedFromMostRecent.map((project, index) => {
                        return (index < amountOfProjects ?
                            <ProjectCard key={project.id}
                                title={project.title}
                                thumbnail={project.thumbnail}
                                tasks={project.tasks[preferredLanguage]}
                                repo={project.repo}
                                preview={project.preview}
                                mockup={project.mockup}
                                stack={project.stack}
                                dateOfCreation={project.dateOfCreation}
                                preferredLanguage={preferredLanguage} /> : null
                        )
                    })
                }
                {
                    projectsSortedFromMostRecent.length > amountOfProjects ?
                        <button className={classes.load_more_button} onClick={handleOnClickLoadMore}>
                            {preferredLanguage === 'en-US' ? 'Load more' : 'Charger plus'}
                        </button> : null
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