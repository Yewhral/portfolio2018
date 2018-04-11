import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backlog.module.scss';

const Backlog = ({
    backlogContent
}) => (
    <div className={styles.backlogBox}>
        <ul className={styles.backlogList}>
            {backlogContent}
        </ul>
    </div>
);

Backlog.defaultProps = {
    backlogContent: [],
};

Backlog.propTypes = {
    backlogContent: PropTypes.Array,
};

export default Backlog;
