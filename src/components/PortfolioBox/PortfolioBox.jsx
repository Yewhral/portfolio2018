import React, { Component } from 'react';
import SingleProject from '../SingleProject/SingleProject';
import projects from '../../resources/data/projects.json';
import styles from './PortfolioBox.module.scss';

class PortfolioBox extends Component {
    render () {
        const projectsList = projects.map(project => (
            <SingleProject
                title={project.title}
                image={project.image}
                date={project.date}
                url={project.url}
                displayUrl={project.displayUrl}
                description={project.description}
                key={project.title}
            />
        ));
        return (
            <div className={styles.portfolioContainer}>
                <main className={styles.portfolioBox}>
                    <ul className={styles.list}>
                        { projectsList }
                    </ul>
                </main>
            </div>
        )
    }
}

export default PortfolioBox;
