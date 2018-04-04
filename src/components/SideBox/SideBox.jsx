import React from 'react';
import PropTypes from 'prop-types';
import AuthorInfoBox from '../InfoBox/AuthorInfoBox';
import ProjectInfoBox from '../InfoBox/ProjectInfoBox';
import styles from './SideBox.module.scss';

const SideBox = ({
    screen,
}) => (
    <div className={styles.sideBox}>
        {screen === 'author' ?
            <AuthorInfoBox />
            :
            <ProjectInfoBox />
        }

    </div>
);

SideBox.defaultProps = {
    author: 'author',
};

SideBox.propTypes = {
    author: PropTypes.string,
};

export default SideBox;
