import { useSelector } from 'react-redux';
import LandingBanner from '../components/LandingBanner';
import classes from '../styles/Home.module.css'

function Home() {

    const preferredLanguage = useSelector((state) => state.languageReducer);
    return (
        <main className={classes.main}>
            <LandingBanner preferredLanguage={preferredLanguage}/>
            <p>Hello world!</p>
        </main>
    )
}

export default Home;
