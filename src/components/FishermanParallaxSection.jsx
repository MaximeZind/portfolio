import classes from '../styles/FishermanParallaxSection.module.css';

import mountains_background from '../assets/parallax_assets/under_1300/mountains_background.svg';
import treeline from '../assets/parallax_assets/under_1300/treeline.svg';
import forest from '../assets/parallax_assets/under_1300/forest.svg';
import forest2 from '../assets/parallax_assets/under_1300/forest2.svg';
import fisherman from '../assets/parallax_assets/under_1300/fisherman.svg';

import mountains_background1300 from '../assets/parallax_assets/over_1300/mountains_background.svg';
import treeline1300 from '../assets/parallax_assets/over_1300/treeline.svg';
import fisherman1300 from '../assets/parallax_assets/over_1300/fisherman.svg';
import forest1300 from '../assets/parallax_assets/over_1300/forest.svg';
import forest21300 from '../assets/parallax_assets/over_1300/forest2.svg';
import { useEffect, useState } from 'react';

function FishermanParallaxSection({ }) {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize',() => setWindowSize(window.innerWidth));
        return () => {
            window.removeEventListener('scroll', () => setWindowSize(window.innerWidth));
        };
    })

    return (
        <>
            <section className={classes.fisherman_parallax_section}>
                <img src={windowSize < 1300 ? mountains_background : mountains_background1300} className={classes.mountains_background} alt='mountains' />
                <img src={windowSize < 1300 ? treeline : treeline1300} className={classes.treeline} alt="Treeline" />
                <img src={windowSize < 1300 ? forest : forest1300} alt="forest" className={classes.forest} />
                <img src={windowSize < 1300 ? forest2 : forest21300} alt="forest" className={classes.forest2} />
                <img src={windowSize < 1300 ? fisherman : fisherman1300} alt="forest" className={classes.fisherman} />
            </section>
        </>
    )
}

export default FishermanParallaxSection;