import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import styles from './GameBackground.module.scss';
import './GameBackground.scss';

class GameBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ReactCSSTransitionReplace
                transitionName="fade-bg"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={300}
            >
                <div
                    className={styles.gameBgDiv}
                    key={this.props.background}
                    style={{backgroundImage: `url(${this.props.background})`}}
                >
                </div>
            </ReactCSSTransitionReplace>
        );
    }
}

export default GameBackground;
