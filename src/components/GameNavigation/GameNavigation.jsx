import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameNavigation.module.scss';

const GameNavigation = ({
    toggleBacklog,
    toggleReturnModal,
}) => (
    <div className={styles.navigation}>
        <button
            className={styles.navigationButton}
            onClick={toggleBacklog}
        >
            backlog
        </button>
        <button
            className={styles.navigationButton}
            onClick={toggleReturnModal}
        >
            exit
        </button>
    </div>
);

GameNavigation.defaultProps = {
    toggleBacklog: () => {},
    toggleReturnModal: () => {},
};

GameNavigation.propTypes = {
    toggleBacklog: PropTypes.func,
    toggleReturnModal: PropTypes.func,
};

export default GameNavigation;
