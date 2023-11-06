import { useSelector } from 'react-redux';
import LandingBanner from '../components/LandingBanner';
import classes from '../styles/Home.module.css'
import SkillsGallery from '../components/SkillsGallery';
import FishermanParallaxSection from '../components/FishermanParallaxSection';
import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import ProjectsGallery from '../components/ProjectsGallery';
import ProjectInfos from '../components/ProjectInfos';
import { getProject } from '../utils/getProjectsData';
import ContactMe from '../components/ContactMe';
import Modal from '../components/Modal';
import Footer from '../components/baselayout/Footer';

function Home({ }) {

    const [scrollValue, setScrollValue] = useOutletContext();
    const preferredLanguage = useSelector((state) => state.languageReducer);
    const mainRef = useRef(null);

    useEffect(() => {
        mainRef.current.addEventListener('scroll', () => setScrollValue(mainRef.current.scrollTop));
        return () => {
            mainRef.current.removeEventListener('scroll', () => setScrollValue(mainRef.current.scrollTop));
        };
    })

    const [isProjectInfosOpen, setIsProjectInfosOpen] = useState(false);

    const emptyProject = {
        id: 0,
        title: '',
        description: {
            'en-US': '',
            'fr-FR': '',
        },
        repo: '',
        preview: '',
        mockup: '',
        stack: []
    };

    //Everything that's got to do with ProjectInfo

    const [currentProjectId, setCurrentProjectId] = useState(0);
    const [currentProject, setCurrentProject] = useState(emptyProject);
    // Change the value of the project in the infos, depending on the current ID
    useEffect(() => {
        if (currentProjectId > 0 && currentProjectId) {
            setCurrentProject(getProject(currentProjectId))
        } else if (currentProjectId === 0 || currentProjectId === null) {
            setCurrentProject(emptyProject);
        }
    }, [currentProjectId]);

    // Everything that's got to do with the Modal (after a message is sent)

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <main ref={mainRef} className={classes.main}>
                <LandingBanner preferredLanguage={preferredLanguage} scrollValue={scrollValue} />
                <SkillsGallery preferredLanguage={preferredLanguage} />
                <FishermanParallaxSection />
                <ProjectsGallery preferredLanguage={preferredLanguage}
                    scrollableContainer={mainRef}
                    setIsProjectInfosOpen={setIsProjectInfosOpen}
                    setCurrentProjectId={setCurrentProjectId} />
                <ContactMe preferredLanguage={preferredLanguage}
                    scrollableContainer={mainRef}
                    setIsModalOpen={setIsModalOpen} />
                <Footer />
            </main>
            {isProjectInfosOpen ?
                <ProjectInfos id={currentProject.id}
                    title={currentProject.title}
                    description={currentProject.description[preferredLanguage]}
                    repo={currentProject.repo}
                    preview={currentProject.preview}
                    mockup={currentProject.mockup}
                    stack={currentProject.stack}
                /> : null}
            {isModalOpen ?
                <Modal closeModal={() => setIsModalOpen(false)}>
                    <p>
                        {
                            preferredLanguage === 'en-US' && 'Your email has been sent. I will get back to you ASAP!'
                        }
                        {
                            preferredLanguage === 'fr-FR' && 'Votre email a bien été envoyé. Je vous répondrai dès que possible!'
                        }
                    </p>
                </Modal> : null}
        </>

    )
}

export default Home;
