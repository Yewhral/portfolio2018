import React, { Component } from 'react';
import styles from './infoBox.module.scss';

class ProjectInfoBox extends Component {
    render() {
        return (
            <div className={styles.infoBox}>
                <p>Hello!</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            </div>
        );
    }
}

export default ProjectInfoBox;
