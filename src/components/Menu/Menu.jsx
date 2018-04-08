import React, { Component } from 'react';
import MenuDescription from '../MenuDescription/MenuDescription';
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import classNames from 'classnames';
import styles from './Menu.module.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileVisible: false,
        };
    }

    hamburgerClick = () => {
        this.setState({
            mobileVisible: !this.state.mobileVisible,
        })
    };

    render() {
        const { mobileVisible } = this.state;
        return (
            <div className={styles.menuContent}>
                <button
                    className={classNames(styles.hamburgerButton)}
                    onClick={this.hamburgerClick}
                >
                    Hamburger
                </button>
                <div className={classNames(styles.menuContainer, mobileVisible && styles.mobile)}>
                    <MenuHeader />
                    <nav className={styles.navigation}>
                        <MenuDescription />
                        <MenuNavigation />
                    </nav>
                </div>
            </div>
        );
    }
}

export default Menu;
