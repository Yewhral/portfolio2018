import React, { Component } from 'react';
import styles from './infoBox.module.scss';

class ProjectInfoBox extends Component {
    render() {
        return (
            <main className={styles.infoBox}>
                <p>Hello!</p>
                <p>First of all, thank you very much for visiting my website.</p>
                <p>This project is a very short visual novel in which I will tell you more about my working experience and programming skills.</p>
                <p>Completing it won't take you more than 5 minutes and it should answer most of your questions.</p>
                <p>I'd like to invite you to start with reading it and then please check out my other projects.</p>
            </main>
        );
    }
}

export default ProjectInfoBox;
