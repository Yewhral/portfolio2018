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
        const { photo, name, text } = this.props.currentSpeech;
        return (
            <div className={styles.boxContainer}>
                <div className={styles.speechOwner}>
                    <div className={styles.photo}>
                        {photo}
                    </div>
                    <div className={styles.name}>
                        {name}
                    </div>
                </div>
                <div className={styles.speechContent}>
                    <div>
                        {text}
                    </div>
                    <button
                        className={styles.navigation}
                        onClick={this.lol}
                    >
                        navigation
                    </button>
                </div>
            </div>
        );
    }
}

export default TextBox;
