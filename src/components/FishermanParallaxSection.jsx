import classes from '../styles/FishermanParallaxSection.module.css';
import PropTypes from 'prop-types';

import pine_tree from '../assets/pineTrees/pine_tree.svg';
import pine_tree_slim from '../assets/pineTrees/pine_tree_slim.svg';



function FishermanParallaxSection({ }) {

    return (
        <section className={classes.fisherman_parallax_section}>
            <img alt='pine tree' src={pine_tree} />
            <img alt='slin pine tree' src={pine_tree_slim} />
            <svg width={150} height={150}>
                <defs>
                    <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="30%">
                        <stop offset="0%" stopColor="#964B15" />
                        <stop offset="100%" stopColor="#6B2906" />
                    </linearGradient>
                    <linearGradient id="pineGradient" x1="0%" y1="0%" x2="10%" y2="100%">
                        <stop offset="0%" stopColor="#00A9A9" />
                        <stop offset="100%" stopColor="#048787" />
                    </linearGradient>
                </defs>
                <polygon fill='url(#trunkGradient)' points='30,270 120,270 77,20 72,20' />
                <polygon fill='url(#pineGradient)' points='0,120 150,120 83,60 67,60' />
                <polygon fill='url(#pineGradient)' points='5,100 145,100 105,60 45,60' />
                <polygon fill='url(#pineGradient)' points='12,80 138,80 120,60 30,60' />
                <polygon fill='url(#pineGradient)' points='20,60 130,60 115,40 35,40' />
                <polygon fill='url(#pineGradient)' points='30,40 120,40 100,20 50,20' />
                <polygon fill='url(#pineGradient)' points='40,20 110,20 75,0' />
            </svg>
        </section>
    )
}

export default FishermanParallaxSection;

FishermanParallaxSection.propTypes = {

}