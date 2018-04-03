import React, { Component } from 'react';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import styles from './Author.module.scss';


class Author extends Component {
    render() {
        return (
            <div className={styles.author}>
                <MenuNavigation />
                Author
            </div>
        );
    }
}

export default Author;
