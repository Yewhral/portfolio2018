import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import styles from './Portfolio.module.scss';

class Portfolio extends Component {
    render() {
        return (
            <div className={styles.portfolio}>
                <Menu />
                <PortfolioBox />
            </div>
        );
    }
}

export default Portfolio;
