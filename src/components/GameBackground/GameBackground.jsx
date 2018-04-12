import React, { Component } from 'react';
import styles from './GameBackground.module.scss';

class GameBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div
                className={styles.gameBgDiv}
                style={{backgroundImage: `url(${this.props.background})`}}
            >
            </div>
        );
    }
}

export default GameBackground;
