import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import SideBox from '../../components/SideBox/SideBox';
import styles from './ProjectDetails.module.scss';

class ProjectDetails extends Component {
    render() {
        return (
            <div className={styles.projectDetails}>
                <Menu />
                <SideBox
                    screen='project'
                />
            </div>
        );
    }
}

export default ProjectDetails;
