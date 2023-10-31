import classes from '../styles/FishermanParallaxSection.module.css';
import pine_tree from '../assets/pineTrees/pine_tree.svg';
import pine_tree_slim from '../assets/pineTrees/pine_tree_slim.svg';
import pine_tree_wide from '../assets/pineTrees/pine_tree_wide.svg';
import mountains_background from '../assets/mountains_background.svg';
import treeline from '../assets/treeline.svg';


function FishermanParallaxSection({ }) {

    return (
        <section className={classes.fisherman_parallax_section}>
            <img className={classes.mountains_background} alt='mountains' src={mountains_background} />
            <img className={classes.treeline} src={treeline} alt="Treeline" />
        </section>
    )
}

export default FishermanParallaxSection;