import { useSelector } from 'react-redux';
import LandingBanner from '../components/LandingBanner';
import classes from '../styles/Home.module.css'
import SkillsGallery from '../components/skillsGallery';
import FishermanParallaxSection from '../components/FishermanParallaxSection';
import { useEffect, useRef } from 'react';
import { useOutletContext } from "react-router-dom";
import ProjectsGallery from '../components/ProjectsGallery';

function Home({ }) {

    const [scrollValue, setScrollValue] = useOutletContext();
    
    const preferredLanguage = useSelector((state) => state.languageReducer);
    const mainRef = useRef(null);

    useEffect(() => {
        mainRef.current.addEventListener('scroll',() => setScrollValue(mainRef.current.scrollTop));
        return () => {
            mainRef.current.removeEventListener('scroll', () => setScrollValue(mainRef.current.scrollTop));
        };
    })


    return (
        <main ref={mainRef} className={classes.main}>
            <LandingBanner preferredLanguage={preferredLanguage} scrollValue={scrollValue} />
            <SkillsGallery preferredLanguage={preferredLanguage}/>
            <FishermanParallaxSection />
            <ProjectsGallery preferredLanguage={preferredLanguage}/>
        </main>
    )
}

export default Home;
