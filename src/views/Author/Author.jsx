import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import SideBox from '../../components/SideBox/SideBox';
import styles from './Author.module.scss';

class Author extends Component {
    render() {
        return (
            <div className={styles.author}>
                <Menu />
                <SideBox
                    screen='author'
                />
            </div>
        );
    }
}

export default Author;
