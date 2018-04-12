import React, { Component } from 'react';
import Backlog from '../Backlog/Backlog';
import styles from './TextBox.module.scss';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backlog: [],
            backlogVisible: false,
        };
    }

    generateBacklog = () => {
        let backlogData = [];
        const { speeches, currentSpeech } = this.props;
        for (let i = 0; i <= currentSpeech.id; i++) {
            backlogData.push(
                {
                    text: speeches[i].text,
                    name: speeches[i].name,
                }
            );
        }
        this.setState({
            backlog: backlogData
        });
    };

    toggleBacklog = (e) => {
        e.stopPropagation();
        const {backlogVisible} = this.state;
        if (backlogVisible !== true) {
            this.generateBacklog();
        }
        this.setState({
            backlogVisible: !backlogVisible,
        });
    };

    render() {
        const { photo, name, text } = this.props.currentSpeech;
        const { backlog, backlogVisible } = this.state;
        const backlogContent = backlog.map(speech => (
            <li className={styles.backlogMessage}>
                <span>{speech.name}</span>
                <span>: {speech.text}</span>
            </li>
        ));

        return (
            <div className={styles.boxContainer}>
                <div className={styles.speechOwner}>
                    <div className={styles.photo}>
                        {photo}
                    </div>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.speechContent}>
                    <div>{text}</div>
                    <button
                        className={styles.navigation}
                        onClick={this.toggleBacklog}
                    >
                        backlog
                    </button>
                </div>
                {backlogVisible &&
                    <div
                        className={styles.backlogWrapper}
                        onClick={this.toggleBacklog}
                    >
                        <Backlog
                            backlogContent={backlogContent}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default TextBox;
