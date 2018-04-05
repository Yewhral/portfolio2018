import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavigationLink.module.scss';

const NavigationLink = ({
    to,
    label,
    classes,
}) => (
    <Link
        to={to}
        className={styles.link}
    >
        <div className={styles.linkContent}>
            <div className={styles.label}>
                {label}
            </div>
            <div className={styles.triangle}>
                <div className={styles.innerTriangle}> </div>
            </div>
        </div>
    </Link>
);

NavigationLink.defaultProps = {
    to: '',
    label: '',
    classes: {},
};

NavigationLink.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    classes: PropTypes.shape({
        custom: PropTypes.string,
    }),
};

export default NavigationLink;
