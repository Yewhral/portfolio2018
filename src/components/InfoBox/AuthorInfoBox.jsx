import React, { Component } from 'react';
import styles from './infoBox.module.scss';

class AuthorInfoBox extends Component {
    render() {
        return (
            <main className={styles.infoBox}>
                <section>
                    <h1>About me</h1>
                    <p className={styles.description}>
                        I'm a very positive developer with a "can do" approach. All technologies fascinate me and I'm very open to learning new things.
                    </p>
                </section>
                <section>
                    <h2>Known technologies:</h2>
                    <ul>
                        <li>
                            <span>Most experience with: </span>
                            <span className={styles.techStack}>Javascript ES6, React 16, HTML5, CSS3, SCSS, Grunt, Git</span>
                        </li>
                        <li>
                            <span>Some experience with: </span>
                            <span className={styles.techStack}>Ruby on Rails 5.1, Node.js, Redux, Mocha, Chai</span>
                        </li>
                        <li>
                            <span>Basic knowledge of: </span>
                            <span className={styles.techStack}>Vue, MongoDB, Jest, Jade, Gulp, Webpack, Bootstrap 4</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>
                        Please use
                        <span className={styles.address}> zabrzyjewski@gmail.com </span>
                        <span>or my </span>
                        <a href="https://www.linkedin.com/in/zabrzyjewski/" className={styles.linkedIn}>linkedIn profile</a>
                        <span> to contact me</span>
                    </p>
                </section>
            </main>
        );
    }
}

export default AuthorInfoBox;
