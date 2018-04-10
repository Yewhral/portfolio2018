import React, { Component } from 'react';
import GameContent from '../../components/GameContent/GameContent';
import styles from './Game.module.scss';

class Game extends Component {
    render() {
        return (
            <div className={styles.game}>
                <GameContent />
            </div>
        );
    }
}

export default Game;
