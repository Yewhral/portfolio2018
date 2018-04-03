import React, { Component } from 'react';
import MenuDescription from '../MenuDescription/MenuDescription';
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import styles from './Menu.module.scss';

class Menu extends Component {
    render() {
        return (
            <div className={styles.menuContainer}>
                <MenuHeader />
                <div className={styles.navigation}>
                    <MenuDescription />
                    <MenuNavigation />
                </div>
            </div>
        );
    }
}

export default Menu;
