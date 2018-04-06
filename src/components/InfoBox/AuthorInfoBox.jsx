import React, { Component } from 'react';
import styles from './infoBox.module.scss';

class AuthorInfoBox extends Component {
    render() {
        return (
            <main className={styles.infoBox}>
                <p>About me</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
            </main>
        );
    }
}

export default AuthorInfoBox;
