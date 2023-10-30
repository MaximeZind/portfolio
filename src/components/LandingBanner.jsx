import { useEffect, useState } from 'react';
import classes from '../styles/LandingBanner.module.css';

import landingBannerTexts from '../data/landingBannerTexts.json';

function LandingBanner({ preferredLanguage }) {

    const [scrollY, setScrollY] = useState(0);

    // useEffect to call handleOnScroll and update the classes of the header
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, []);

    function handleOnScroll() {
        const scroll = window.scrollY;
        setScrollY(scroll);
    }

    return (
        <section className={classes.landing_banner}>
            <div className={classes.landing_banner_left}>
                <div className={classes.landing_banner_hero_content}>
                    <div className={classes.landing_banner_hero_content_text}>
                        <p>{landingBannerTexts.greetings[preferredLanguage]}</p>
                        <h1>
                            {preferredLanguage === 'en-US' ? "I'm " : 'Je suis '}
                            <span className={classes.name}>Maxime Zinderstein</span>
                        </h1>
                        <h2>{landingBannerTexts.whoAmI[preferredLanguage]}</h2>
                    </div>
                    <div className={classes.landing_banner_hero_content_buttons}>
                        <button className={`${classes.resume_button} ${classes.button}`}>
                            {preferredLanguage === 'en-US' ? "My resume" : 'Mon CV'}
                        </button>
                        <button className={`${classes.contactme_button} ${classes.button}`}>
                            {preferredLanguage === 'en-US' ? "Contact me" : 'Me contacter'}
                        </button>
                    </div>
                </div>
                <div className={classes.landing_banner_clouds_left}>
                    <svg className={`${classes.cloud5} ${classes.cloud}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        version="1.1"
                        style={{
                            transform: `translateX(-${scrollY / 5}px)`
                        }}>
                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                            <g id="icon-1-cloud">
                                <path d="M26.9993494,14.4145295 C28.7676457,15.1852931 30,16.9483386 30,19 C30,21.7558048 27.7616745,24 25.0005601,24 L7.99943992,24 C5.23249418,24 3,21.7614237 3,19 C3,16.9491311 4.23965876,15.1816085 6.01189661,14.4115388 L6.01189661,14.4115388 C6.00400207,14.275367 6,14.1381509 6,14 C6,10.1340066 9.13400656,7 13,7 C15.2979469,7 17.3372745,8.10728055 18.6135384,9.81739735 C19.4525719,9.29909701 20.441357,9 21.5,9 C24.5090248,9 26.9536744,11.4163763 26.9993494,14.4145295 L26.9993494,14.4145295 Z" id="cloud" sketch: type="MSShapeGroup" />
                            </g>
                        </g>
                    </svg>
                    <svg className={`${classes.cloud4} ${classes.cloud}`}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{
                            transform: `translateX(-${scrollY / 1.5}px)`
                        }}>
                        <path fill='#269AF2' d="M429.382,412.512c45.629,0,82.618-36.99,82.618-82.619c0-39.196-27.305-71.994-63.925-80.468  c-0.749-82.934-68.2-149.937-151.311-149.937c-57.06,0-106.735,31.585-132.518,78.221c-7.845-3.395-16.492-5.285-25.583-5.285  c-32.75,0-59.779,24.421-63.917,56.042C32.131,236.916,0,274.498,0,319.594c0,51.318,41.601,92.918,92.917,92.918  C107.211,412.512,419.589,412.512,429.382,412.512z" />
                    </svg>
                </div>
            </div>
            <div className={classes.landing_banner_clouds_right}>
                <svg className={`${classes.cloud1} ${classes.cloud}`}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{
                        transform: `translateX(${scrollY / 3}px)`
                    }}>
                    <path fill='#269AF2' d="M429.382,412.512c45.629,0,82.618-36.99,82.618-82.619c0-39.196-27.305-71.994-63.925-80.468  c-0.749-82.934-68.2-149.937-151.311-149.937c-57.06,0-106.735,31.585-132.518,78.221c-7.845-3.395-16.492-5.285-25.583-5.285  c-32.75,0-59.779,24.421-63.917,56.042C32.131,236.916,0,274.498,0,319.594c0,51.318,41.601,92.918,92.917,92.918  C107.211,412.512,419.589,412.512,429.382,412.512z" />
                </svg>
                <svg className={`${classes.cloud2} ${classes.cloud}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    version="1.1"
                    style={{
                        transform: `translateX(${scrollY / 5}px)`
                    }}>
                    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g id="icon-1-cloud">
                            <path d="M26.9993494,14.4145295 C28.7676457,15.1852931 30,16.9483386 30,19 C30,21.7558048 27.7616745,24 25.0005601,24 L7.99943992,24 C5.23249418,24 3,21.7614237 3,19 C3,16.9491311 4.23965876,15.1816085 6.01189661,14.4115388 L6.01189661,14.4115388 C6.00400207,14.275367 6,14.1381509 6,14 C6,10.1340066 9.13400656,7 13,7 C15.2979469,7 17.3372745,8.10728055 18.6135384,9.81739735 C19.4525719,9.29909701 20.441357,9 21.5,9 C24.5090248,9 26.9536744,11.4163763 26.9993494,14.4145295 L26.9993494,14.4145295 Z" id="cloud" sketch: type="MSShapeGroup" />
                        </g>
                    </g>
                </svg>
                <svg className={`${classes.cloud3} ${classes.cloud}`}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.671 426.671"
                    style={{
                        transform: `translateX(${scrollY}px)`
                    }}>
                    <path fill='#000' d="M355.145,201.003c-5.103,0-10.048,0.533-14.844,1.536c0-0.26,0.03-0.521,0.03-0.772  c0-65.839-53.363-119.159-119.164-119.159c-55.561,0-102.255,38.046-115.401,89.515c-6.063-1.318-12.331-2.044-18.782-2.044  C38.955,170.082,0,209.02,0,257.097c0,48.038,38.955,86.967,86.989,86.967h268.16c39.488,0,71.522-32.009,71.522-71.514  C426.667,233.011,394.633,201.003,355.145,201.003z" />
                </svg>
            </div>
            {/* <svg className={`${classes.cloud1} ${classes.cloud}`}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{
                    transform: `translateX(${scrollY / 3}px)`
                }}>
                <path fill='#269AF2' d="M429.382,412.512c45.629,0,82.618-36.99,82.618-82.619c0-39.196-27.305-71.994-63.925-80.468  c-0.749-82.934-68.2-149.937-151.311-149.937c-57.06,0-106.735,31.585-132.518,78.221c-7.845-3.395-16.492-5.285-25.583-5.285  c-32.75,0-59.779,24.421-63.917,56.042C32.131,236.916,0,274.498,0,319.594c0,51.318,41.601,92.918,92.917,92.918  C107.211,412.512,419.589,412.512,429.382,412.512z" />
            </svg>
            <svg className={`${classes.cloud2} ${classes.cloud}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                version="1.1"
                style={{
                    transform: `translateX(${scrollY / 5}px)`
                }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g id="icon-1-cloud">
                        <path d="M26.9993494,14.4145295 C28.7676457,15.1852931 30,16.9483386 30,19 C30,21.7558048 27.7616745,24 25.0005601,24 L7.99943992,24 C5.23249418,24 3,21.7614237 3,19 C3,16.9491311 4.23965876,15.1816085 6.01189661,14.4115388 L6.01189661,14.4115388 C6.00400207,14.275367 6,14.1381509 6,14 C6,10.1340066 9.13400656,7 13,7 C15.2979469,7 17.3372745,8.10728055 18.6135384,9.81739735 C19.4525719,9.29909701 20.441357,9 21.5,9 C24.5090248,9 26.9536744,11.4163763 26.9993494,14.4145295 L26.9993494,14.4145295 Z" id="cloud" sketch: type="MSShapeGroup" />
                    </g>
                </g>
            </svg>
            <svg className={`${classes.cloud3} ${classes.cloud}`}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 426.671 426.671"
                style={{
                    transform: `translateX(${scrollY}px)`
                }}>
                <path fill='#000' d="M355.145,201.003c-5.103,0-10.048,0.533-14.844,1.536c0-0.26,0.03-0.521,0.03-0.772  c0-65.839-53.363-119.159-119.164-119.159c-55.561,0-102.255,38.046-115.401,89.515c-6.063-1.318-12.331-2.044-18.782-2.044  C38.955,170.082,0,209.02,0,257.097c0,48.038,38.955,86.967,86.989,86.967h268.16c39.488,0,71.522-32.009,71.522-71.514  C426.667,233.011,394.633,201.003,355.145,201.003z" />
            </svg> */}
        </section>
    )
}

export default LandingBanner;