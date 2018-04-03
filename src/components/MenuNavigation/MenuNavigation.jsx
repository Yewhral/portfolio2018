import React, { Component } from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import styles from './MenuNavigation.module.scss';

class MenuNavigation extends Component {
    render() {
        return (
            <ul className={styles.list}>
                <li className={styles.listElement}>
                    <NavigationLink
                        to='/game'
                        label='Start the game'
                    />
                </li>
                <li className={styles.listElement}>
                    <NavigationLink
                        to='/author'
                        label='Author info'
                    />
                </li>
                <li className={styles.listElement}>
                    <NavigationLink
                        to='/portfolio'
                        label='Other projects'
                     />
                </li>
            </ul>
        );
    }
}

export default MenuNavigation;
