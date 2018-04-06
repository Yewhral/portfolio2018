import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import styles from './SingleProject.module.scss';

class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
        };
    }

    componentWillMount() {
        this.setState({
            imageLoaded: false,
        })
    }

    handleLoaded = () => {
        this.setState({
            imageLoaded: true,
        });
    };

    render () {
        const { image, title, date, url, displayUrl, description } = this.props;
        const { imageLoaded } = this.state;

        return (
            <li className={styles.singleProject}>
                <div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.date}>
                            Updated at: {date}
                         </div>
                    </div>
                    <div className={styles.url}>
                        <span>Link: </span>
                        <a
                            href={url}
                            className={styles.link}
                        >
                            {displayUrl}
                        </a>
                    </div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div className={styles.imageContainer}>
                    {!imageLoaded &&
                        <Loader />
                    }
                    <img
                        src={image}
                        alt=''
                        className={styles.image}
                        onLoad={this.handleLoaded}
                    />
                </div>
            </li>
        )
    }

}

SingleProject.defaultProps = {
    image: '',
    title: '',
    date: '',
    url: '',
    displayUrl: '',
    description: '',
};

SingleProject.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    displayUrl: PropTypes.string,
    description: PropTypes.string,
};

export default SingleProject;
