import React, { Component } from 'react';
import SingleProject from '../SingleProject/SingleProject';
import projects from '../../resources/data/projects.json';
import styles from './PortfolioBox.module.scss';

class PortfolioBox extends Component {
    render () {
        const projectsList = projects.map(project => (
            <SingleProject

            />
        ));
        return (
            <div className={styles.portfolioContainer}>
                <main className={styles.portfolioBox}>
                    <ul>
                        { projectsList }
                    </ul>
                </main>
            </div>
        )
    }
}

export default PortfolioBox;
