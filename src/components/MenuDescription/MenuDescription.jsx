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
                    When you're looking for someone who thinks life is amazing and coding is fun!
                </div>
            </div>
        );
    }
}

export default MenuDescription;
