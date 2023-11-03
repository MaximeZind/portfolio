import classes from '../styles/ProjectPreview.module.css';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function ProjectPreview({ id, title, thumbnail, setCurrentProjectId, scrollableContainer }) {

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
                } else if (rect.top < 0 || rect.bottom > window.innerHeight) {
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
        <img ref={previewRef} className={classes.project_preview} src={thumbnail} alt={title} />
    )
}


export default ProjectPreview;

ProjectPreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    setCurrentProjectId: PropTypes.func.isRequired,
    scrollableContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
}