import React, { Component } from 'react';
import TextBox from '../TextBox/TextBox';
import styles from './GameContent.module.scss';

class GameContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleClick= () => {
      alert('KLIK');
    };

    render() {
        return (
            <div
                className={styles.gameContent}
                onClick={this.handleClick}
            >
                Game
                <TextBox />
            </div>
        );
    }
}

export default GameContent;
