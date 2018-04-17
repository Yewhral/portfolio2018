import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './infoBox.module.scss';

class ProjectInfoBox extends Component {
    render() {
        return (
            <main className={styles.infoBox}>
                <h2>Hello!</h2>
                <p>
                    <span>First of all, </span>
                    <span className={styles.standOut}>thank you very much </span>
                    <span>for visiting my website.</span>
                </p>
                <p>This project is a very short visual novel in which I will tell you more about my working experience and programming skills.</p>
                <p>Completing it won't take you more than 5 minutes and it should answer most of your questions.</p>
                <p>
                    <span className={styles.standOut}>I'd like to invite you </span>
                    <span>to </span>
                    <Link to="/game" className={styles.link}>start with reading it </Link>
                    <span>and then </span>
                    <span className={styles.standOut}>please check out </span>
                    <Link to="/portfolio" className={styles.link}>my other projects.</Link>
                </p>
            </main>
        );
    }
}

export default ProjectInfoBox;
