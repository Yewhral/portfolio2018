import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import PropTypes from 'prop-types';
import Backlog from '../Backlog/Backlog';
import GameNavigation from '../GameNavigation/GameNavigation';
import QuestionModal from '../QuestionModal/QuestionModal';
import styles from './TextBox.module.scss';
import './TextBox.scss';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backlogVisible: false,
            exitModalVisible: false,
        };
    }

    toggleBacklog = (e) => {
        e.stopPropagation();
        const {backlogVisible} = this.state;
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
        const { backlog } = this.props;
        const { photo, name, text } = this.props.currentSpeech;
        const { backlogVisible, exitModalVisible } = this.state;
        const backlogContent = backlog.map(speech => (
            <li key={speech.text} className={styles.backlogMessage}>
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
                <ReactCSSTransitionReplace
                    transitionName="fade-wait"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={400}
                >
                    <div key={text}>
                        {text}
                    </div>
                </ReactCSSTransitionReplace>
                </div>
                <GameNavigation
                    toggleBacklog={this.toggleBacklog}
                    toggleReturnModal={this.toggleReturnModal}
                />
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
                        linkText="Yes, go back"
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
