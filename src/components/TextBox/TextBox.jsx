import React, { Component } from 'react';
import styles from './TextBox.module.scss';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    lol = (e) => {
        e.stopPropagation();
      alert('nielol');
    };

    render() {
        return (
            <div className={styles.boxContainer}>
                <div>
                    <div>obrazek</div>
                    <div>name</div>
                </div>
                <div>{this.props.currentSpeech.text}</div>
                <button onClick={this.lol}>navigation</button>
            </div>
        );
    }
}

export default TextBox;
