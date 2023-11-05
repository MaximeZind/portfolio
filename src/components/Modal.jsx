import React from 'react';
import classes from '../styles/Modal.module.css';
import PropTypes from 'prop-types';

function Modal({ children, closeModal, }) {

    return (
        <div className={classes.modal_background}>
            <div className={classes.modal}>
                {closeModal &&
                    <span className={classes.close_modal_icon} onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className={classes.close_modal_icon_cross}
                            viewBox="0 0 64 64">
                            <line x1="9.37"
                                x2="54.63"
                                y1="9.37"
                                y2="54.63"
                                fill="none"
                                strokeMiterlimit="10"
                                strokeWidth="4" />
                            <line x1="9.37"
                                x2="54.63"
                                y1="54.63"
                                y2="9.37"
                                fill="none"
                                strokeMiterlimit="10"
                                strokeWidth="4" />
                        </svg>
                    </span>
                }
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func,
}

export default Modal;