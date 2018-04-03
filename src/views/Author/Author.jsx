import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import styles from './Author.module.scss';


class Author extends Component {
    render() {
        return (
            <div className={styles.author}>
                <Menu />
                <div className={styles.bg}>
                    boxplaceholder
                </div>
            </div>
        );
    }
}

export default Author;
