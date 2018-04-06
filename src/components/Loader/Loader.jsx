import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
    <div className={styles.loaderBackground}>
        <div className={styles.loader}></div>
    </div>
);

export default Loader;
