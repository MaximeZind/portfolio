import classes from '../styles/ProjectPreview.module.css';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import github_logo from '../assets/stack_icons/github_logo.png';
import figma_logo from '../assets/stack_icons/figma_logo.svg';

// Will be displayed, along with the ProjectInfos on the left, on screen > 768px
// I could not find a way to make it work, so I made classic boxes for screens <= 768px
function ProjectPreview({ id, title, thumbnail, repo, preview, mockup, setCurrentProjectId, scrollableContainer, preferredLanguage }) {

    const previewRef = useRef(null);
    const [isCurrentPreview, setIsCurrentPreview] = useState(false);
    const [exitId, setExitId] = useState(null);

    useEffect(() => {
        function handleScroll() {
            if (previewRef.current) {
                const rect = previewRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.top >= -50) {
                    setCurrentProjectId(id);
                    setIsCurrentPreview(true);
                } else if (rect.top < 50 || rect.bottom > window.innerHeight) {
                    handleExit();
                }
            }
        }

        scrollableContainer.current.addEventListener('scroll', handleScroll);
        return () => {
            scrollableContainer.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleExit() {
        setIsCurrentPreview((prevIsCurrentPreview) => {
            if (prevIsCurrentPreview === true) {
                setExitId(0);
            }
            return false;
        });
    }

    useEffect(() => {
        if (exitId !== null) {
            setCurrentProjectId(exitId);
            setExitId(null); // Reset the exit ID after updating the project ID
        }
    }, [exitId]);


    return (
        <div className={classes.project_preview} ref={previewRef}>
            <img className={classes.project_preview_img} src={thumbnail} alt={title} />
            <div className={classes.project_preview_title}>
                <h3>{title}</h3>
                <div className={classes.stack}>
                {
                        repo &&
                        <Link to={repo} target="_blank" title='repo'>
                            <span className={`${classes.stack_icon} ${classes.repo}`}>
                                <img src={github_logo} alt="Github logo" />
                            </span>
                        </Link>
                    }
                    {
                        preview &&
                        <Link to={preview} target="_blank" title={preferredLanguage === 'en-US' ? 'preview' : 'aperçu'} >
                            <span className={`${classes.stack_icon} ${classes.preview}`}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    width="92px"
                                    height="92px"
                                    viewBox="0 0 92 92"
                                    enableBackground="new 0 0 92 92"
                                    space="preserve">
                                    <path id="XMLID_1239_" d="M91.3,43.8C90.6,42.8,74.4,19,46,19C17.6,19,1.4,42.8,0.7,43.8c-0.9,1.3-0.9,3.1,0,4.5  C1.4,49.2,17.6,73,46,73c28.4,0,44.6-23.8,45.3-24.8C92.2,46.9,92.2,45.1,91.3,43.8z M46,65C26.7,65,13.5,51.4,9,46  c4.5-5.5,17.6-19,37-19c19.3,0,32.5,13.6,37,19C78.4,51.5,65.3,65,46,65z M48.3,29.6c-4.4-0.6-8.7,0.5-12.3,3.2c0,0,0,0,0,0  c-7.3,5.5-8.8,15.9-3.3,23.2c2.7,3.6,6.5,5.8,10.9,6.5c0.8,0.1,1.6,0.2,2.3,0.2c3.6,0,7-1.2,9.9-3.3c7.3-5.5,8.8-15.9,3.3-23.2  C56.6,32.5,52.7,30.2,48.3,29.6z M52.3,54.5c-2.2,1.7-5,2.4-7.8,2c-2.8-0.4-5.3-1.9-7-4.1C34.1,47.7,35,41,39.7,37.5  c2.2-1.7,5-2.4,7.8-2c2.8,0.4,5.3,1.9,7,4.1C57.9,44.3,57,51,52.3,54.5z M51.9,40c0.8,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8  c-0.7,0.7-1.8,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.7-0.8,1.8-1.2,2.8-1.2  C50.2,38.9,51.2,39.3,51.9,40z" />
                                </svg>
                            </span>
                        </Link>
                    }
                    {
                        mockup &&
                        <Link to={mockup} target="_blank" title={preferredLanguage === 'en-US' ? 'mockup' : 'maquette'}>
                            <span className={`${classes.stack_icon} ${classes.mockup}`}>
                                <img src={figma_logo} alt="Figma logo" />
                            </span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}


export default ProjectPreview;

ProjectPreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    repo: PropTypes.string,
    preview: PropTypes.string,
    mockup: PropTypes.string,
    setCurrentProjectId: PropTypes.func.isRequired,
    scrollableContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    preferredLanguage: PropTypes.string.isRequired,
}