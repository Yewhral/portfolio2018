import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Backlog from '../Backlog/Backlog';
import styles from './TextBox.module.scss';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backlog: [],
            backlogVisible: false,
            exitModalVisible: false,
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

    toggleReturnModal = (e) => {
        e.stopPropagation();
        const {exitModalVisible} = this.state;
        this.setState({
            exitModalVisible: !exitModalVisible,
        });
    };

    disableClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const { photo, name, text } = this.props.currentSpeech;
        const { backlog, backlogVisible, exitModalVisible } = this.state;
        const backlogContent = backlog.map(speech => (
            <li
                className={styles.backlogMessage}
                key={speech.text}
            >
                <span>{speech.name}</span>
                <span>: {speech.text}</span>
            </li>
        ));

        return (
            <main className={styles.boxContainer}>
                <div className={styles.speechOwner}>
                    <img
                        className={styles.photo}
                        src={photo}
                        alt=''
                    />
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
                    <button
                        onClick={this.toggleReturnModal}
                    >
                        exit
                    </button>
                </div>
                {backlogVisible &&
                    <Backlog
                        onClick={this.toggleBacklog}
                        backlogContent={backlogContent}
                    />
                }
                {exitModalVisible &&
                    <QuestionModal
                        question="Do you want to go back to the main screen?"
                        outerOnClick={this.disableClick}
                        button1OnClick={this.toggleReturnModal}
                        button1Text="No, stay"
                        LinkText="Yes, go back"
                        to="/"
                    />
                }
            </main>
        );
    }
}

export default TextBox;

TextBox.defaultProps = {
    photo: '',
    name: '',
    text: '',
};

TextBox.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
};
