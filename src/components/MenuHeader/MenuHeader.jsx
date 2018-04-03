import React, { Component } from 'react';
import styles from './MenuHeader.module.scss';

class MenuHeader extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1 className={styles.h1}>
                    Michał Zabrzyjewski
                </h1>
            </div>
        );
    }
}

export default MenuHeader;
