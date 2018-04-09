import React from 'react';
import PropTypes from 'prop-types';
import styles from './HamburgerButton.module.scss';

const HamburgerButton = ({
    onClick,
    mobileVisible,
}) => (
    <button
        onClick={onClick}
        className={styles.hamburgerButton}
    >
        {!mobileVisible ?
            <div className={styles.burgerIcon}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            :
            <div className={styles.closeIcon}>
                X
            </div>
        }
    </button>
);

HamburgerButton.defaultProps = {
    onClick: () => {},
    mobileVisible: false,
};

HamburgerButton.propTypes = {
    onClick: PropTypes.func,
    mobileVisible: PropTypes.boolean,
};

export default HamburgerButton;
