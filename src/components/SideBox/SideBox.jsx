import React from 'react';
import PropTypes from 'prop-types';
import AuthorInfoBox from '../AuthorInfoBox/AuthorInfoBox';
import ProjectInfoBox from '../ProjectInfoBox/ProjectInfoBox';
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
