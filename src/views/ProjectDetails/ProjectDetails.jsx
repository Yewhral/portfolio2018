import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import styles from './ProjectDetails.module.scss';

class ProjectDetails extends Component {
    render() {
        return (
            <div className={styles.projectDetails}>
                <Menu />
                <div>
                    Project details
                </div>
            </div>
        );
    }
}

export default ProjectDetails;
