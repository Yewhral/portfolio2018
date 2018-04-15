// TODO use this as a generic component to pass {link} and two buttons

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './QuestionModal.module.scss';

const QuestionModal = ({
    question,
    button1Text,
    button2Text,
    outerOnClick,
    button1OnClick,
    button2OnClick,
    linkText,
    to,
}) => (
    <div
        className={styles.questionWrapper}
        onClick={outerOnClick}
    >
        <div className={styles.questionBox}>
            <div className={styles.question}>{question}</div>
            <button
                className={styles.button}
                onClick={button1OnClick}
            >
                {button1Text}
            </button>
            {button2OnClick &&
                <button
                    className={styles.button}
                    onClick={button2OnClick}
                >
                    {button2Text}
                </button>
            }
            {linkText &&
                <Link
                    to={to}
                    className={styles.button}
                >
                    {linkText}
                </Link>
            }
        </div>
    </div>
);

QuestionModal.propTypes = {
    question: PropTypes.string,
    button1Text: PropTypes.string,
    button2Text: PropTypes.string,
    outerOnClick: PropTypes.func,
    button1OnClick: PropTypes.func,
    button2OnClick: PropTypes.func,
    linkText: PropTypes.string,
    to: PropTypes.string,
};

export default QuestionModal;
