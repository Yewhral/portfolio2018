import React, { Component } from 'react';
import styles from './MenuDescription.module.scss';

class MenuDescription extends Component {
    render() {
        return (
            <div>
                <h2 className={styles.h2}>
                    JavaScript developer
                </h2>
                <div className={styles.description}>
                    description lorem ipsum dolor sit amet wololo description lorem ipsum amet dolor sit
                </div>
            </div>
        );
    }
}

export default MenuDescription;
