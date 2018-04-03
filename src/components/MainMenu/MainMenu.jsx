import React, { Component } from 'react';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import styles from './MainMenu.module.scss';

class MainMenu extends Component {
    render() {
        return (
            <div className={styles.mainMenu}>
                <MenuNavigation />
            </div>
        );
    }
}

export default MainMenu;
