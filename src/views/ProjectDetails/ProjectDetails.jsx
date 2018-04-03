import React, { Component } from 'react';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import styles from './ProjectDetails.module.scss';

class ProjectDetails extends Component {
    render() {
        return (
            <div className={styles.projectDetails}>
                <MenuNavigation />
                Project details
            </div>
        );
    }
}

export default ProjectDetails;
