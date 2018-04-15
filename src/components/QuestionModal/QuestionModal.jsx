// TODO use this as a generic component to pass {link} and two buttons

import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionModal.module.scss';

const QuestionModal = ({
    question,
    button1Text,
    button2Text,
    outerOnClick,
    onClick1,
    onClick2,
    LinkText,
    to,
}) => (
    <div
        className={styles.questionWrapper}
        onClick={outerOnClick}
    >
        <div className={styles.backlogBox}>
            <div>{question}</div>
            <button>{button1Text}</button>
            <button>{button2Text}</button>
            <Link
                to={to}
                className={styles.big}
            >
                {LinkText}
            </Link>
        </div>
    </div>
);

QuestionModal.defaultProps = {

};

QuestionModal.propTypes = {

};

export default QuestionModal;
