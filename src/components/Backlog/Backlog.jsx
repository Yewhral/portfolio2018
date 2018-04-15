import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backlog.module.scss';

const Backlog = ({
    backlogContent,
    onClick
}) => (
    <div
        className={styles.backlogWrapper}
        onClick={onClick}
    >
        <div className={styles.backlogBox}>
            <ul className={styles.backlogList}>
                {backlogContent}
            </ul>
        </div>
    </div>
);

Backlog.defaultProps = {
    backlogContent: [],
};

Backlog.propTypes = {
    backlogContent: PropTypes.Array,
};

export default Backlog;
