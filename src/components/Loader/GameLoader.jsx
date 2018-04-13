import React from 'react';
import styles from './Loader.module.scss';

const GameLoader = () => (
    <div className={styles.gameLoaderBackground}>
        <div> Loading... </div>
        <div className={styles.gameLoader}></div>
    </div>
);

export default GameLoader;
